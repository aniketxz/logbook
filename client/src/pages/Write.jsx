import { useAuth, useUser } from '@clerk/clerk-react'
import { useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Write = () => {
	const { isLoaded, isSignedIn } = useUser()
	const { getToken } = useAuth()
	const editorRef = useRef(null)
	const quillRef = useRef(null)

	const BASE_URL = import.meta.env.VITE_API_URL

	const navigate = useNavigate()

	useEffect(() => {
		if (!quillRef.current && editorRef.current) {
			quillRef.current = new Quill(editorRef.current, {
				theme: 'snow',
			})
		}
	}, [isLoaded])

	const mutation = useMutation({
		mutationFn: async (newPost) => {
			const token = await getToken()
			return axios.post(`${BASE_URL}/posts`, newPost, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		},
		onSuccess: (res) => {
			toast.success('Post created successfully!')
			navigate(`/${res.data.slug}`)
		}
	})

	if (!isLoaded) {
		return (
			<div className='flex justify-center items-center text-3xl'>
				Loading...
			</div>
		)
	}

	if (isLoaded && !isSignedIn) {
		return <div>You should Login!</div>
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)

		const data = {
			title: formData.get('title'),
			category: formData.get('category'),
			desc: formData.get('desc'),
			content: quillRef.current.root.innerHTML,
		}
		console.log(data)

		mutation.mutate(data)
	}

	return (
		<main className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col gap-6 mb-8'>
			<h1 className='text-xl font-light'>Create a New Post</h1>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-6 flex-1 mb-6'
				action=''
			>
				<button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white/80'>
					Add a cover image
				</button>
				<input
					className='text-4xl font-semibold bg-transparent outline-none'
					type='text'
					placeholder='My Awesome Story'
					name='title'
				/>
				<div className='flex items-center gap-4'>
					<label htmlFor='category' className='text-sm'>
						Choose a category:
					</label>
					<select
						name='category'
						id='category'
						className='p-2 rounded-xl bg-white/80 shadow-md'
					>
						<option value='general'>General</option>
						<option value='web-design'>Web Design</option>
						<option value='development'>Development</option>
						<option value='databases'>Databases</option>
						<option value='seo'>Search Engines</option>
						<option value='marketing'>Marketing</option>
					</select>
				</div>
				<textarea
					className='p-4 rounded-xl bg-white/80 shadow-md'
					name='desc'
					placeholder='A short description'
				/>
				<div className='flex-1 rounded-xl bg-white shadow-md'>
					<div ref={editorRef}></div>
				</div>
				<button
					disabled={mutation.isPending}
					className='bg-blue-800 text-white font-medium rounded-xl p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed'
				>
					{mutation.isPending ? 'Loading...' : 'Send'}
				</button>
				{mutation.isError && <span>{mutation.error.message}</span>}
			</form>
		</main>
	)
}

export default Write
