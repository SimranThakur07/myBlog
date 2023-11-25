import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/styles/App.css'
import Login from './pages/Register/Login'
import Signup from './pages/Register/Signup'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateBlog from './pages/CreateBlog'
import Blog from './pages/Blog'
import About from './pages/About'
import Blogdetailspage from './pages/Blogdetailspage'


function App() {
 

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/create-blog' element={<CreateBlog/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/ablout' element={<About/>}/>
  <Route path='/blog/:id' element={<Blogdetailspage/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
