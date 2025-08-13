import { format } from 'timeago.js'

const Comment = ({ comment, postId }) => {
	return (
		<div className='p-4 bg-slate-50 rounded-xl mb-4'>
			<div className='flex items-center gap-4'>
				{comment.user.img && (
					<img
						src={comment.user.img}
						w='40'
						className='size-10 rounded-full object-cover'
					/>
				)}
				<span className='font-medium'>{comment.user.username}</span>
				<span className='text-sm text-gray-500'>
					{format(comment.createdAt)}
				</span>
			</div>
			<div className='mt-4'>
				<p>{comment.desc}</p>
			</div>
		</div>
	)
}

export default Comment
