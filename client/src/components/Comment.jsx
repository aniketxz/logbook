import LazyImage from './LazyImage'

const Comment = () => {
	return (
		<div className='p-4 bg-slate-50 rounded-xl mb-8'>
			<div className='flex items-center gap-4'>
				<LazyImage
					src='userImg.jpeg'
					w='40'
					className='size-10 rounded-full object-cover'
				/>
				<span className='font-medium'>John Doe</span>
				<span className='text-sm text-gray-500'>2 days ago</span>
			</div>
			<div className='mt-4'>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
					molestias minus? Esse assumenda veritatis facere. Corrupti vero
					obcaecati aspernatur tempore eligendi iste aut sunt amet? Similique
					odio incidunt minima eveniet?
				</p>
			</div>
		</div>
	)
}

export default Comment
