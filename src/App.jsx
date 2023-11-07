import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/styles/App.css'
import Login from './pages/Register/Login'
import Signup from './pages/Register/Signup'
import Home from './pages/Home'


function App() {
 

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
