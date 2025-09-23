import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { format } from 'timeago.js'

const fetchPost = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
	)
	return res.data
}

const FeaturedPosts = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ['featuredPosts'],
		queryFn: () => fetchPost(),
	})

	if (isPending) return 'Loading...'
	if (error) return 'Something went wrong!' + error.message

	const posts = data.posts
	if (!posts || posts.length === 0) return

	return (
		<section className='mt-8 flex flex-col lg:flex-row gap-8'>
			{/* Main Featured Post */}
			<div className='w-full lg:w-1/2 flex flex-col gap-4'>
				{/* image */}
				{posts[0].img && (
					<LazyImage
						src={posts[0].img}
						w='895'
						className='rounded-3xl object-cover'
					/>
				)}
				{/* details */}
				<div className='flex items-center gap-4'>
					<h2 className='font-semibold lg:text-lg'>01.</h2>
					<Link className='text-blue-800 lg:text-lg'>{posts[0].category}</Link>
					<span className='text-gray-500'>{format(posts[0].createdAt)}</span>
				</div>
				{/* title */}
				<Link
					to={posts[0].slug}
					className='text-xl lg:text-3xl font-semibold lg:font-bold'
				>
					{posts[0].title}
				</Link>
			</div>
			{/* Other Featured Posts */}
			<div className='w-full lg:w-1/2 flex flex-col gap-4'>
				{/* Post 2 */}
				{posts[1] && (
					<div className='lg:h-1/3 flex justify-between gap-4'>
						{posts[1].img && (
							<LazyImage
								src={posts[1].img}
								w='298'
								className='rounded-3xl object-cover w-1/3 aspect-video'
							/>
						)}
						<div className='w-2/3'>
							<div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
								<h2 className='font-semibold'>02.</h2>
								<Link className='text-blue-800'>{posts[1].category}</Link>
								<span className='text-gray-500 text-sm'>
									{format(posts[1].createdAt)}
								</span>
							</div>
							<Link
								to={posts[1].slug}
								className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
							>
								{posts[1].title}
							</Link>
						</div>
					</div>
				)}
				{/* Post 3 */}
				{posts[2] && (
					<div className='lg:h-1/3 flex justify-between gap-4'>
						{posts[2].img && (
							<LazyImage
								src={posts[2].img}
								w='298'
								className='rounded-3xl object-cover w-1/3 aspect-video'
							/>
						)}
						<div className='w-2/3'>
							<div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
								<h2 className='font-semibold'>03.</h2>
								<Link className='text-blue-800'>{posts[2].category}</Link>
								<span className='text-gray-500 text-sm'>
									{format(posts[2].createdAt)}
								</span>
							</div>
							<Link
								to={posts[2].slug}
								className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
							>
								{posts[2].title}
							</Link>
						</div>
					</div>
				)}
				{/* Post 4 */}
				{posts[3] && (
					<div className='lg:h-1/3 flex justify-between gap-4'>
						{posts[3].img && (
							<LazyImage
								src={posts[3].img}
								w='298'
								className='rounded-3xl object-cover w-1/3 aspect-video'
							/>
						)}
						<div className='w-2/3'>
							<div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
								<h2 className='font-semibold'>04.</h2>
								<Link className='text-blue-800'>{posts[3].category}</Link>
								<span className='text-gray-500 text-sm'>
									{format(posts[3].createdAt)}
								</span>
							</div>
							<Link
								to={posts[3].slug}
								className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
							>
								{posts[3].title}
							</Link>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default FeaturedPosts
