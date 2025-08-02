import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'

const PostListItem = () => {
	return (
		<article className='flex flex-col xl:flex-row gap-8'>
			{/* image */}
			<div className='md:hidden xl:block xl:w-1/3'>
				<LazyImage
					src='/postImg.jpeg'
					w={735}
					className='rounded-2xl object-cover'
				/>
			</div>
			{/* details */}
			<div className='flex flex-col gap-4 xl:w-2/3'>
				<Link to='/test' className='text-4xl font-semibold'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, labore
					necessitatibus? Possimus?
				</Link>
				<div className='flex items-center gap-2 text-gray-400 text-sm'>
					<span>Written by</span>
					<Link className='text-blue-800'>John Doe</Link>
					<span>on</span>
					<Link className='text-blue-800'>Web Design</Link>
					<span>2 days ago</span>
				</div>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Reprehenderit laudantium eligendi reiciendis quae illo dolores
					voluptatibus soluta similique quibusdam et iusto voluptates quisquam
					molestiae deserunt nesciunt, impedit provident. Quam numquam optio
					obcaecati ad a, voluptas nostrum aspernatur deleniti, veniam
					repellendus ipsum at sed enim excepturi, harum perspiciatis temporibus
					ullam corrupti.
				</p>
				<Link to='/test' className='underline text-sm text-blue-800'>
					Read More
				</Link>
			</div>
		</article>
	)
}

export default PostListItem
