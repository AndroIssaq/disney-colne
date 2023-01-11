import React from 'react'
import ImgCursal from './ImgCursal'
import NewInDeisny from './NewInDeisny'
import Recommended from './Recommended'
import Viewers from './Viewers'
import Originals from './Originals';
import Trending from './Trending';

const Home = () => {
  return (
    <div className='w-[100%]  h-[100vh]  lg:ml-[20px] p-[10px] md:ml-[20px] overflow-y-scroll '>
      <ImgCursal/>
      <Viewers/>
      <NewInDeisny/>
      <Recommended/>
      <Trending/>
      <Originals/>
    </div>
  )
}

export default Home