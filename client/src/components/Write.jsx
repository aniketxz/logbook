import {useUser} from '@clerk/clerk-react'

const Write = () => {
  const {isLoaded, isSignedIn} = useUser()

  if(!isLoaded) return <div className='flex justify-center items-center text-3xl'>Loading...</div>

  return (
    <main>
      Write
    </main>
  )
}

export default Write