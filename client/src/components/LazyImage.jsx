import { useState } from 'react'

const LazyImage = ({ src, alt, w='800', h='auto', className = '' }) => {
	const [loaded, setLoaded] = useState(false)

	const baseUrl = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT
	const placeholderSrc = `${baseUrl}/${src}?tr=w-20,q-10,bl-20`
	const fullImgSrc = `${baseUrl}/${src}?tr=w-${w},h-${h}`

	return (
			<div className={`relative overflow-hidden ${className}`}>
				{/* Blurred Placeholder */}
				<img
					src={placeholderSrc}
					alt={alt}
					className={`absolute top-0 left-0 w-full h-full object-cover scale-110 ${
						loaded ? 'invisible' : 'visible'
					}`}
					aria-hidden='true'
				/>

				{/* Full-quality Image */}
				<img
					src={fullImgSrc}
					alt={alt}
					loading='lazy'
					onLoad={() => setLoaded(true)}
					className={`w-full h-full object-cover ${
						loaded ? 'visible' : 'invisible'
					}`}
				/>
			</div>
	)
}

export default LazyImage
