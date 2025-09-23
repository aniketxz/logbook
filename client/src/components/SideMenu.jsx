import { Link, useSearchParams } from 'react-router-dom'
import Search from './Search'

const SideMenu = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const handleFilterChange = (e) => {
		if (searchParams.get('sort' !== !e.target.value)) {
			setSearchParams({
				...Object.fromEntries(searchParams.entries()),
				sort: e.target.value,
			})
		}
	}

	const handleCategoryChange = (category) => {
		if (searchParams.get('cat') !== category) {
			setSearchParams({
				...Object.fromEntries(searchParams.entries()),
				cat: category,
			})
		}
	}

	return (
		<section className='px-4 h-max sticky top-8'>
			<h2 className='mb-4 text-sm font-medium'>Search</h2>
			<Search />
			<h2 className='mt-8 mb-4 text-sm font-medium'>Filters</h2>
			<div className='flex flex-col gap-2 text-sm'>
				<label
					htmlFor='newest'
					className='flex items-center gap-2 cursor-pointer'
				>
					<input
						type='radio'
						name='sort'
						id='newest'
						value='newest'
						onChange={handleFilterChange}
						className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
					/>
					Newest
				</label>
				<label
					htmlFor='most-popular'
					className='flex items-center gap-2 cursor-pointer'
				>
					<input
						type='radio'
						name='sort'
						id='most-popular'
						value='most-popular'
						onChange={handleFilterChange}
						className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
					/>
					Most Popular
				</label>
				<label
					htmlFor='trending'
					className='flex items-center gap-2 cursor-pointer'
				>
					<input
						type='radio'
						name='sort'
						id='trending'
						value='trending'
						onChange={handleFilterChange}
						className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
					/>
					Trending
				</label>
				<label
					htmlFor='oldest'
					className='flex items-center gap-2 cursor-pointer'
				>
					<input
						type='radio'
						name='sort'
						id='oldest'
						value='oldest'
						onChange={handleFilterChange}
						className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'
					/>
					Oldest
				</label>
			</div>
			<h2 className='mt-8 mb-4 text-sm font-medium'>Categories</h2>
			<div className='flex flex-col gap-2 text-sm'>
				<span
					onClick={() => handleCategoryChange('general')}
					className='underline cursor-pointer'
				>
					All
				</span>
				<span
					onClick={() => handleCategoryChange('web-design')}
					className='underline cursor-pointer'
				>
					Web Design
				</span>
				<span
					onClick={() => handleCategoryChange('development')}
					className='underline cursor-pointer'
				>
					Development
				</span>
				<span
					onClick={() => handleCategoryChange('databases')}
					className='underline cursor-pointer'
				>
					Databases
				</span>
				<span onClick={() => handleCategoryChange('seo')} className='underline cursor-pointer'>
					Search Engines
				</span>
				<span
					onClick={() => handleCategoryChange('marketing')}
					className='underline cursor-pointer'
				>
					Marketing
				</span>
			</div>
		</section>
	)
}

export default SideMenu
