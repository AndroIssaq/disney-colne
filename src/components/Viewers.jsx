import React from 'react'
import viewers1 from '../assets/viewers-disney.png'
import viewers2 from '../assets/viewers-marvel.png'
import viewers3 from '../assets/viewers-national.png'
import viewers4 from '../assets/viewers-pixar.png'
import viewers5 from '../assets/viewers-starwars.png'
import video1 from '../assets/1564674844-disney.mp4'
import video2 from '../assets/1564676115-marvel.mp4'
import video3 from '../assets//1564676296-national-geographic.mp4'
import video4 from '../assets/1564676714-pixar.mp4'
import video5 from '../assets/1608229455-star-wars.mp4'
import "video-react/dist/video-react.css";
const Viewers = () => {
  return (
    <section className='mt-[50px] p-[20px]'>
        <div className="boxes grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[25px]">
            <div className="box border-4 border-gray-900  lg:h-[140px] md:h-[120px]  rounded-lg flex items-center justify-center relative">
                <img src={viewers1} alt="" className=' absolute w-[100%] h-[100%] object-cover' />
                <video autoPlay={true} loop={true} playsInline={true} className='z-[-2] rounded-md' >
                    <source src={video1} />
                </video>
                <span className=' absolute w-[100%] h-[100%] bg-gray-900 z-[-1] '></span>
            </div>
            <div className="box border-4 border-gray-900 lg:h-[140px] md:h-[120px] rounded-lg flex items-center justify-center relative">
                <img src={viewers2} alt="" className=' absolute w-[100%] h-[100%] object-cover'/>
                <video autoPlay={true} loop={true} playsInline={true} className='z-[-2] rounded-md' >
                    <source src={video2} />
                </video>
                <span className=' absolute w-[100%] h-[100%] bg-gray-900 z-[-1] '></span>
            </div>
            <div className="box border-4 border-gray-900 lg:h-[140px] md:h-[120px] rounded-lg flex items-center justify-center relative">
                <img src={viewers3} alt="" className=' absolute w-[100%] h-[100%] object-cover'/>
                <video autoPlay={true} loop={true} playsInline={true} className='z-[-2] rounded-md' >
                    <source src={video3} />
                </video>
                <span className=' absolute w-[100%] h-[100%] bg-gray-900 z-[-1] '></span>
            </div>
            <div className="box border-4 border-gray-900 lg:h-[140px] md:h-[120px] rounded-lg flex items-center justify-center relative">
                <img src={viewers4} alt="" className=' absolute w-[100%] h-[100%] object-cover'/>
                <video autoPlay={true} loop={true} playsInline={true} className='z-[-2] rounded-md' >
                    <source src={video4} />
                </video>
                <span className=' absolute w-[100%] h-[100%] bg-gray-900 z-[-1] '></span>
            </div>
            <div className="box border-4 border-gray-900 lg:h-[140px] md:h-[120px] rounded-lg flex items-center justify-center relative">
                <img src={viewers5} alt="" className=' absolute w-[100%] h-[100%] object-cover'/>
                <video autoPlay={true} loop={true} playsInline={true} className='z-[-2] rounded-md' >
                    <source src={video5} />
                </video>
                <span className=' absolute w-[100%] h-[100%] bg-gray-900 z-[-1] '></span>
            </div>
        </div>
    </section>
  )
}

export default Viewers