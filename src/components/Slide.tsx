'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import slide from '../../public/slide1.png'
import slide2 from '../../public/slide2.png'
import slide3 from '../../public/slide3.jpg'

const data=[
  {
    id:1,
    title:"always fresh",
    image:slide
  },
    {
    id:2,
    title:"always hot",
    image:slide2
  },
    {
    id:3,
    title:"always delisious",
    image:slide3
  },
]
const Slide = () => {
  const [currentSlide , setCurrentSLide] =useState(0);

  // useEffect(()=>{
  //   const interval=setInterval(()=>{
  //     setCurrentSLide(prev => (prev ===data.length -1 ? 0 : prev +1))
  //   },2000);
  //     return () =>clearInterval(interval)
  // },[]);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
          </h1>
        <button className='bg-red-500 text-white py-4 px-8'>ثبت سفارش</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='w-full flex-1 relative '>
        <Image src={data[currentSlide].image} alt="slide" fill/>
      </div>
    </div>
  )
}

export default Slide
