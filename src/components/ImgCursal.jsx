import React from 'react'
import Slider from "react-slick";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import banner1 from '../assets/slider-badag.jpg'
import banner2 from '../assets/slider-badging.jpg'
import banner3 from '../assets/slider-scales.jpg'
import banner4 from '../assets/slider-scale.jpg'
const ImgCursal = () => {
  return (
    <div className=' rounded-lg  overflow-hidden shadow-lg lg:h-[400px] md:h-[300px]  sm:h-[250px] h-[200px]'>
    <Splide options={{
        rewind: true,
        gap   : '1rem', 
        height:400,
        type   : 'loop',
        arrows:  false,
        autoplay:true,
    }} 
        aria-label="My Favorite Images">
        <SplideSlide>
            <img src={banner1} alt="Image 1" className='h-[100%] object-cover'/>
        </SplideSlide>
        <SplideSlide>
            <img src={banner2} alt="Image 2" className='h-[100%] object-cover'/>
        </SplideSlide>
        <SplideSlide>
            <img src={banner4} alt="Image 2" className='h-[100%] object-cover'/>
        </SplideSlide>
    </Splide>
    </div>
  )
}

export default ImgCursal