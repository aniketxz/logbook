import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PostList from './components/PostList'
import SinglePost from './pages/SinglePost'
import Write from './components/Write'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/posts' element={<PostList />} />
          <Route path='/:slug' element={<SinglePost />} />
          <Route path='/write' element={<Write />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
