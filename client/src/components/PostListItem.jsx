import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'
import { format } from 'timeago.js'

const PostListItem = ({ post }) => {
	return (
		<article className='flex flex-col xl:flex-row gap-8 mb-12'>
			{/* image */}
			{post.img && (
				<div className='md:hidden xl:block xl:w-1/3'>
					<LazyImage
						src={post.img}
						w={735}
						className='rounded-2xl object-cover'
					/>
				</div>
			)}
			{/* details */}
			<div className='flex flex-col gap-4 xl:w-2/3'>
				<Link to={`/${post.slug}`} className='text-4xl font-semibold'>
					{post.title}
				</Link>
				<div className='flex items-center gap-2 text-gray-400 text-sm'>
					<span>Written by</span>
					<Link
						className='text-blue-800'
						to={`/posts?author=${post.user.username}`}
					>
						{post.user.username}
					</Link>
					<span>on</span>
					<Link className='text-blue-800'>{post.category}</Link>
					<span>{format(post.createdAt)}</span>
				</div>
				<p>{post.desc}</p>
				<Link to={`/${post.slug}`} className='underline text-sm text-blue-800'>
					Read More
				</Link>
			</div>
		</article>
	)
}

export default PostListItem
