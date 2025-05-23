import Image from 'next/image'
import React from 'react'
import offerProduct from '../../public/offerProduct.png'
import { featuredProducts } from '@/data'

function Featured() {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* SINGLE iITEMS */}

        {featuredProducts.map((item)=>(
          <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className='relative flex-1 w-full'>
            <Image src={item.img} alt='' fill className='object-contain'/>
          </div>
          )
          }
          {/* TEXT CONTAINER */}
            <div className='flex-1 flex flex-col items-center text-center gap-4'>
              <h1 className='text-xl font-bold uppercase'>{item.title}</h1>
              <p className='p-4'>{item.desc}</p>
              <span className='text-xl font-bold'>{item.price}</span>
              <button className='bg-red-500 text-white p-2 rounded-md'>add to cart</button>
            </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default Featured