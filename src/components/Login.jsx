import React from 'react'
import loginBg from '../assets/login-background.jpg'
import ctaLogo from '../assets/cta-logo-one.svg'
import ctaLogo2 from '../assets/cta-logo-two.png'
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { auth } from '../../Firebase';
const Login = () => {

  return (
    <div className=' relative w-[100%] h-[100vh] flex items-center justify-center '>
        <div className='w-[100%] h-[100%] absolute top-[0] z-[-1]'><img src={loginBg} alt="" className='w-[100%] h-[100%] object-cover' /></div>
        <div className="content w-[100%] flex  flex-col items-center justify-center">
            <div className="cta-logos lg:w-[700px] md:w-[600px] sm:w-[450px] w-[350px] text-center  flex gap-[20px] flex-col items-center justify-center">
                <img src={ctaLogo} alt="" className='w-[100%]'/> 
                <button className='lg:w-[100%] lg:h-[70px] md:w-[90%] md:h-[60px] sm:w-[80%] w-[60%] sm:h-[60px]  h-[50px] rounded-md bg-blue-700 font-bold hover:bg-transparent hover:border-2 border-blue-700 transition duration-300 lg:text-[25px] md:text-[20px]  sm:text-[18px] text-[16px]  '>GET ALL THERE</button>
                <p className='lg:text-[17px] md:text-[16px]  sm:text-[15px] text-[12px] text-gray-400'> Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</p>
            <img src={ctaLogo2} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Login