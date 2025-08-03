import { useState } from 'react'
import { Link } from 'react-router-dom'

import LazyImage from './LazyImage'
import { SignedIn, SignedOut, useAuth, UserButton } from '@clerk/clerk-react'
import { useEffect } from 'react'

const Navbar = () => {
	const [open, setOpen] = useState(false)

	const { getToken } = useAuth()
	
	useEffect(() => {
		getToken().then(token => console.log(token))
	}, [getToken]);

	return (
		<div className='w-full h-16 md:h-20 flex items-center justify-between'>
			{/* LOGO */}
			<Link to='/' className='flex items-center gap-4 text-2xl font-bold'>
				<LazyImage src='/logo.png' alt='logbook logo' className='size-8' />
				<span>logbook.</span>
			</Link>
			{/* MOBILE MENU */}
			<div className='md:hidden'>
				<div
					className='cursor-pointer text-4xl'
					onClick={() => setOpen((prev) => !prev)}
				>
					{open ? 'X' : '☰'}
				</div>
				<div
					className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16  transition-all ease-in-out ${
						open ? '-right-0' : '-right-[100%]'
					}`}
				>
					<Link to='/'>Home</Link>
					<Link to='/'>Trending</Link>
					<Link to='/'>Most Popular</Link>
					<Link to='/'>About</Link>
					<SignedOut>
						<Link to='/login'>
							<button className='py-2 px-4 rounded-full bg-blue-800 text-white'>
								Login 👋
							</button>
						</Link>
					</SignedOut>
					<SignedIn>
						<div className='flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-800 text-white'>
							<span>Hello</span>
							<UserButton />
						</div>
					</SignedIn>
				</div>
			</div>

			{/* DESKTOP MENU */}
			<div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
				<Link to='/'>Home</Link>
				<Link to='/'>Trending</Link>
				<Link to='/'>Most Popular</Link>
				<Link to='/'>About</Link>
				<SignedOut>
					<Link to='/login'>
						<button className='py-2 px-4 rounded-full bg-blue-800 text-white'>
							Login 👋
						</button>
					</Link>
				</SignedOut>
				<SignedIn>
					<div className='flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-800 text-white'>
						<span>Hello</span>
						<UserButton />
					</div>
				</SignedIn>
			</div>
		</div>
	)
}

export default Navbar
