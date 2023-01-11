import React from 'react'
import logo from '../assets/logo.svg'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../Firebase'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate}from 'react-router-dom'
import { UserLogin, UserLogout } from '../features/UserSlice'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import HomeNav from './HomeNav'
const Navbar = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const googleProvider=new GoogleAuthProvider()
    const userSelector=useSelector((state)=>state.user)
    const [user,loading]=useAuthState(auth)
    console.log(userSelector);
    const signin=async()=>{
        try {
                const result=await signInWithPopup(auth,googleProvider)
               
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                navigate('/home')
            }else{
                navigate('/')
            }
        })
    },[user])
    useEffect(()=>{
        if(user){
            dispatch(UserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            }))
        }else{
            dispatch(UserLogout())
        }
        
    },[signin])
    if(!user){
        return(<nav className='w-[100%] h-[80px] flex items-center '>
        <div className="container w-[90%] mx-auto flex items-center">
            <div className="content flex items-center justify-between w-[100%]">
            <div className='w-[100px] '><img src={logo} alt="" className='w-[100%]'/></div>
            <button onClick={signin} className=' bg-blue-700 hover:bg-transparent hover:border-2 transition duration-300 border-blue-700 lg:w-[130px] md:w-[100px] sm:w-[80px] w-[80px] h-[35px] rounded-sm lg:text-[20px] md:text-[18px]  sm:text-[18px] text-[16px] '>Login</button>
            </div>
        </div>
    </nav>)
    }else{
        return(
            <HomeNav/>
        )
        
    }
}

export default Navbar