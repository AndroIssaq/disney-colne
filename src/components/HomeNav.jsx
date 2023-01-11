import React from 'react'
import logo from '../assets/logo.svg'
import {MdSearch,MdOutlineHome,MdHomeMax,MdOutlineMovieCreation,MdAutoAwesome}from "react-icons/md";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../../Firebase'
import { useSelector,useDispatch } from 'react-redux'
import {VscSignOut} from 'react-icons/vsc'
const HomeNav = () => {
    const [user,loading]=useAuthState(auth)
    const userSelector=useSelector((state)=>state.user.photo)
    console.log(userSelector);
  return (

      <nav className='home-nav transition duration-300 lg:w-[90px] lg:h-[100vh] md:w-[90px] md:h-[100vh] sm:w-[100%] sm:h-[80px] w-[100%] h-[80px]  flex items-center justify-center '>
        <div className="container lg:h-[90%] md:h-[90%] sm:h-[90%] my-auto h-[90%]  flex  items-center justify-center">
            <div className="content flex items-center lg:justify-start md:justify-start sm:justify-between  justify-between lg:flex-col md:flex-col sm:flex-row flex-row lg:gap-[80px] md:gap-[80px] sm:gap-[20px] gap-[20px] h-[100%] w-[90%] ">
            <div className='lg:w-[80px] md:w-[80px] sm:w-[60px] w-[60px]'><img src={logo} alt={'fdf'} className='w-[100%]'/></div>
            <div className="icons flex lg:flex-col md:flex-col sm:flex-row flex-row items-center lg:gap-[30px] md:gap-[30px] sm:gap-[15px] gap-[15px] ">
                <span className='lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-gray-400 hover:scale-[1.5] cursor-pointer hover:text-white transition duration-300'><MdSearch/> </span>
                <span className='lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-gray-400 hover:scale-[1.5] cursor-pointer hover:text-white transition duration-300'><MdOutlineHome/></span>
                <span className='lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-gray-400 hover:scale-[1.5] cursor-pointer hover:text-white transition duration-300'><MdHomeMax/></span>
                <span className='lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-gray-400 hover:scale-[1.5] cursor-pointer hover:text-white transition duration-300'><MdOutlineMovieCreation/></span>
                <span className='lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-gray-400 hover:scale-[1.5] cursor-pointer hover:text-white transition duration-300'><MdAutoAwesome/></span>
                <span onClick={()=>auth.signOut()} className='lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-gray-400 hover:scale-[1.5] cursor-pointer hover:text-white transition duration-300'><VscSignOut/></span>
                <span className='lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] w-[40px] h-[40px] rounded-full overflow-hidden'><img src={user? userSelector : ''} className="w-[100%] h-[100%] object-cover " alt="" /></span>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default HomeNav