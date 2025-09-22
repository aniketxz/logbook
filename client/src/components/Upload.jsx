import { IKContext, IKUpload } from 'imagekitio-react'
import { useRef } from 'react'
import toast from 'react-hot-toast'

const Upload = ({ children, type, setProgress, setData }) => {
	const BASE_URL = import.meta.env.VITE_API_URL
	const IK_PUBLIC_KEY = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY
	const IK_URL_ENDPOINT = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT

	const uploadRef = useRef(null)

	const authenticator = async () => {
		try {
			const response = await fetch(`${BASE_URL}/posts/upload-auth`)

			if (!response.ok) {
				const errorText = await response.text()
				throw new Error(
					`Request failed with status ${response.status}: ${errorText}`
				)
			}

			const data = await response.json()
			const { signature, expire, token } = data
			return { signature, expire, token }
		} catch (error) {
			console.error('Authentication error:', error)
			throw new Error('Authentication request failed')
		}
	}

	const onError = (error) => {
		toast.error('Image upload failed!')
		console.log(error)
	}

	const onSuccess = (res) => {
		console.log(res)
		setData(res)
	}

	const onUploadProgress = (progress) => {
		setProgress(Math.round((progress.loaded / progress.total) * 100))
		console.log('Progress', progress)
	}

	return (
		<IKContext
			publicKey={IK_PUBLIC_KEY}
			urlEndpoint={IK_URL_ENDPOINT}
			authenticator={authenticator}
		>
			<IKUpload
				useUniqueFileName
				onError={onError}
				onSuccess={onSuccess}
				onUploadProgress={onUploadProgress}
				className='hidden'
				ref={uploadRef}
				accept={`${type}/*`}
			/>
			<div className='cursor-pointer' onClick={() => uploadRef.current.click()}>
				{children}
			</div>
		</IKContext>
	)
}

export default Upload
