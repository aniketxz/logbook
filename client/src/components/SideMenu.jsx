import { Link } from 'react-router-dom'
import Search from './Search'

const SideMenu = () => {
	return (
		<section className='px-4 h-max sticky top-8'>
			<h2 className='mb-4 text-sm font-medium'>Search</h2>
			<Search />
			<h2 className='mt-8 mb-4 text-sm font-medium'>Filters</h2>
			<div className='flex flex-col gap-2 text-sm'>
				<label htmlFor='newest' className='flex items-center gap-2 cursor-pointer'>
					<input
						type='radio'
						name='sort'
            id='newest'
						value='newest'
						className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
            />
					Newest
				</label>
				<label htmlFor='most-popular' className='flex items-center gap-2 cursor-pointer'>
					<input
						type='radio'
            name='sort'
            id='most-popular'
						value='most-popular'
						className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
            />
					Most Popular
				</label>
				<label htmlFor='trending' className='flex items-center gap-2 cursor-pointer'>
					<input
						type='radio'
						name='sort'
            id='trending'
						value='trending'
						className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
            />
					Trending
				</label>
				<label htmlFor='oldest' className='flex items-center gap-2 cursor-pointer'>
					<input
						type='radio'
						name='sort'
            id='oldest'
						value='oldest'
						className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
					/>
					Oldest
				</label>
			</div>
			<h2 className='mt-8 mb-4 text-sm font-medium'>Categories</h2>
			<div className='flex flex-col gap-2 text-sm'>
				<Link to='/posts' className='underline'>
					All
				</Link>
				<Link to='/posts?cat=web-design' className='underline'>
					Web Design
				</Link>
				<Link to='/posts?cat=development' className='underline'>
					Development
				</Link>
				<Link to='/posts?cat=databases' className='underline'>
					Databases
				</Link>
				<Link to='/posts?cat=seo' className='underline'>
					Search Engines
				</Link>
				<Link to='/posts?cat=marketing' className='underline'>
					Marketing
				</Link>
			</div>
		</section>
	)
}

export default SideMenu
