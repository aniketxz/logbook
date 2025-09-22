import { Link, useParams } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search'
import Comments from '../components/Comments'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { format } from 'timeago.js'

const fetchPost = async (slug) => {
	const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
	return res.data
}

const SinglePost = () => {
	const { slug } = useParams()

	const { isPending, error, data } = useQuery({
		queryKey: ['post', slug],
		queryFn: () => fetchPost(slug),
	})

	if (isPending) return 'Loading...'
	if (error) return 'Something went wrong!' + error.message
	if (!data) return 'Post not found!'

	return (
		<main className='flex flex-col gap-8'>
			{/* detail */}
			<div className='flex gap-8'>
				<div className='lg:w-3/5 flex flex-col gap-8'>
					<h1 className='text-xl md:text-3xl xl:text-4xl 2xl:5xl font-semibold'>
						{data.title}
					</h1>
					<div className='flex items-center gap-2 text-gray-400 text-sm'>
						<span>Written by</span>
						<Link className='text-blue-800'>{data.user.username}</Link>
						<span>on</span>
						<Link className='text-blue-800'>{data.category}</Link>
						<span>{format(data.createdAt)}</span>
					</div>
					<p className='text-gray-500 font-medium'>{data.desc}</p>
				</div>
				{data.img && <div className='hidden lg:block w-2/5'>
					<LazyImage src={data.img} w='600' className='rounded-md' />
				</div>}
			</div>
			{/* content */}
			<div className='flex flex-col md:flex-row gap-12'>
				{/* text */}
				<div className='lg:text-lg flex flex-col gap-6 text-justify'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
						facilis nisi amet unde, hic facere mollitia. Sed, tenetur odit
						placeat voluptatem sit, doloribus quisquam ut, dolorum cupiditate
						voluptatibus obcaecati et illum doloremque repellat blanditiis
						temporibus est quidem? Ea harum facere, rerum distinctio ex magnam
						beatae placeat laudantium! Sequi, consectetur vel?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
						corporis cum voluptates excepturi voluptas incidunt iste, eligendi
						aliquid aperiam sapiente necessitatibus itaque maxime ipsum, magni
						commodi esse cupiditate dolore, rem officia. Laudantium ratione quos
						vel magni fugit modi atque nihil illo officia inventore velit,
						aliquid ipsa at id natus incidunt cumque nobis numquam quasi
						quibusdam error quidem deserunt quod. Placeat repellat quidem
						accusamus in labore sequi, soluta sapiente beatae officiis!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						nesciunt maxime dolorem nemo aliquam natus eos expedita dolores in
						ex ab exercitationem reprehenderit quo nostrum unde itaque velit
						voluptas, corrupti eius repellat cumque, vel sequi nisi! Sequi nisi
						quas adipisci molestias. Repudiandae eaque libero, fugit incidunt
						omnis soluta cupiditate est odit ratione animi labore numquam vel
						sit! Labore, officia ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						nesciunt maxime dolorem nemo aliquam natus eos expedita dolores in
						ex ab exercitationem reprehenderit quo nostrum unde itaque velit
						voluptas, corrupti eius repellat cumque, vel sequi nisi! Sequi nisi
						quas adipisci molestias. Repudiandae eaque libero, fugit incidunt
						omnis soluta cupiditate est odit ratione animi labore numquam vel
						sit! Labore, officia ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						nesciunt maxime dolorem nemo aliquam natus eos expedita dolores in
						ex ab exercitationem reprehenderit quo nostrum unde itaque velit
						voluptas, corrupti eius repellat cumque, vel sequi nisi! Sequi nisi
						quas adipisci molestias. Repudiandae eaque libero, fugit incidunt
						omnis soluta cupiditate est odit ratione animi labore numquam vel
						sit! Labore, officia ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						nesciunt maxime dolorem nemo aliquam natus eos expedita dolores in
						ex ab exercitationem reprehenderit quo nostrum unde itaque velit
						voluptas, corrupti eius repellat cumque, vel sequi nisi! Sequi nisi
						quas adipisci molestias. Repudiandae eaque libero, fugit incidunt
						omnis soluta cupiditate est odit ratione animi labore numquam vel
						sit! Labore, officia ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						nesciunt maxime dolorem nemo aliquam natus eos expedita dolores in
						ex ab exercitationem reprehenderit quo nostrum unde itaque velit
						voluptas, corrupti eius repellat cumque, vel sequi nisi! Sequi nisi
						quas adipisci molestias. Repudiandae eaque libero, fugit incidunt
						omnis soluta cupiditate est odit ratione animi labore numquam vel
						sit! Labore, officia ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						nesciunt maxime dolorem nemo aliquam natus eos expedita dolores in
						ex ab exercitationem reprehenderit quo nostrum unde itaque velit
						voluptas, corrupti eius repellat cumque, vel sequi nisi! Sequi nisi
						quas adipisci molestias. Repudiandae eaque libero, fugit incidunt
						omnis soluta cupiditate est odit ratione animi labore numquam vel
						sit! Labore, officia ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						nesciunt maxime dolorem nemo aliquam natus eos expedita dolores in
						ex ab exercitationem reprehenderit quo nostrum unde itaque velit
						voluptas, corrupti eius repellat cumque, vel sequi nisi! Sequi nisi
						quas adipisci molestias. Repudiandae eaque libero, fugit incidunt
						omnis soluta cupiditate est odit ratione animi labore numquam vel
						sit! Labore, officia ipsum.
					</p>
				</div>
				{/* menu */}
				<div className='h-max sticky top-8'>
					<h2 className='mb-4 text-sm font-medium'>Author</h2>
					<div className='flex flex-col gap-4'>
						<div className='flex items-center gap-8'>
							{data.user.img && <LazyImage
								src={data.user.img}
								className='size-12 rounded-full object-cover'
								w='48'
								h='48'
							/>}
							<Link className='text-blue-800'>{data.user.username}</Link>
						</div>
						<p className='text-sm text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
							voluptates?
						</p>
						<div className='flex gap-2'>
							<Link>
								<LazyImage src='facebook.svg' />
							</Link>
							<Link>
								<LazyImage src='instagram.svg' />
							</Link>
						</div>
					</div>
					<PostMenuActions post={data} />
					<h3 className='mt-8 mb-4 text-sm font-medium'>Categories</h3>
					<div className='flex flex-col gap-2 text-sm'>
						<Link className='underline'>All</Link>
						<Link className='underline' to='/'>
							Web Design
						</Link>
						<Link className='underline' to='/'>
							Development
						</Link>
						<Link className='underline' to='/'>
							Databases
						</Link>
						<Link className='underline' to='/'>
							Search Engines
						</Link>
						<Link className='underline' to='/'>
							Marketing
						</Link>
					</div>
					<h3 className='mt-8 mb-4 text-sm font-medium'>Search</h3>
					<Search />
				</div>
			</div>
			<Comments postId={data._id} />
		</main>
	)
}

export default SinglePost
