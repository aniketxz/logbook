import LazyImage from '../components/LazyImage'

const SinglePost = () => {
	return (
		<main className='flex flex-col gap-8'>
			{/* detail */}
			<div className='flex gap-8'>
				<div className='lg:w-3/5 flex flex-col gap-8'>
					<h1>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum
						nemo molestias.
					</h1>
					<div className='flex items-center gap-2 text-gray-400 text-sm'>
						<span>Written by</span>
						<Link>John Doe</Link>
						<span>on</span>
						<Link>Web Design</Link>
						<span>2 days ago</span>
					</div>
				</div>
				<div className='hidden lg:block w-2/5'>
					<LazyImage src='postImg.jpeg' />
				</div>
			</div>
			{/* content */}
			<div className=''></div>
		</main>
	)
}

export default SinglePost
