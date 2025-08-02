import { SignIn } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const navigate = useNavigate()

	const handleBackgroundClick = () => {
		navigate('/')
	}

	const stopPropagation = (e) => {
		e.stopPropagation()
	}

	return (
		<div
			onClick={handleBackgroundClick}
			className='fixed inset-0 z-10 flex items-center justify-center backdrop-blur-[1px] bg-black/30'
		>
			<div onClick={stopPropagation} className='relative z-10 mt-[5vh]'>
				<SignIn signUpUrl='/register' />
			</div>
		</div>
	)
}

export default Login
