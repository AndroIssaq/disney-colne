import React from 'react'
import new1 from '../assets/new.webp'
import new2 from '../assets/new2.webp'
import new3 from '../assets/new3.webp'
import new4 from '../assets/new4.webp'
import new5 from '../assets/new5.webp'
import new6 from '../assets/new6.webp'
import new7 from '../assets/new7.webp'
const Trending = () => {
  return (
    <section className='p-[20px] mt-[30px]'>
        <div className="title text-[25px]">Trending</div>
        <div className="containers mt-[30px] grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-2 grid-cols-2 gap-[25px]">
            <div className="one-container bg-white lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={new1} alt="" className='   w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover' />
            </div>
            <div className="one-container   lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px]   rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={new2} alt="" className='  w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container  lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={new3} alt="" className=' w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container  lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={new4} alt="" className=' w-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container  lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={new5} alt="" className=' w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container  lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={new6} alt="" className=' w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={new7} alt="" className=' w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default Trending