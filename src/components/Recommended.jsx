import React from 'react'
import reco1 from '../assets/reco1.webp'
import reco2 from '../assets/reco2.webp'
import reco3 from '../assets/reco3.webp'
import reco4 from '../assets/reco4.webp'
import reco5 from '../assets/reco5.webp'
import reco6 from '../assets/reco6.webp'
import reco7 from '../assets/reco7.webp'
const Recommended = () => {
  return (
    <section className='p-[20px] mt-[30px]'>
        <div className="title text-[25px]">Recommened For You</div>
        <div className="containers mt-[30px] grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-2 grid-cols-2 gap-[25px]">
            <div className="one-container bg-white lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={reco1} alt="" className='   w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover' />
            </div>
            <div className="one-container   lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px]   rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={reco2} alt="" className='  w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container  lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={reco3} alt="" className=' w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container  lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={reco4} alt="" className=' w-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container  lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={reco5} alt="" className=' w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container  lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={reco6} alt="" className=' w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
            <div className="one-container lg:h-[230px] md:h-[200px] sm:h-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center relative">
                <img src={reco7} alt="" className=' w-[100%] lg:h-[130%] md:h-[130%] sm:h-[100%] h-[100%] object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default Recommended