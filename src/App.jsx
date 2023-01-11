import { useState } from 'react'
import './App.css'
import { Route ,Routes } from 'react-router'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { auth } from '../Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
function App() {
  const [count, setCount] = useState(0)
  const [user,loading]=useAuthState(auth)
  return (
    <div className="App">
      <div className={`${user ? 'flex  justify-center lg:flex-row md:flex-row sm:flex-col flex-col' : 'block'}`}>
      <Navbar/>
        <Routes>
          <Route path={'/'} element={<Login/>}/>
          <Route path={'/home'} element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
