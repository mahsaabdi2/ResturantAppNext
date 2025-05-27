import Image from 'next/image'
import React from 'react'
import login from "../../../public/loginBg.png"
import google from "../../../public/google.png"
import fb from "../../../public/facebook.png"
import Link from 'next/link'

function LoginPage() {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/* BOX */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2'>
        {/* IMAGE CONTAINER */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image src={login} alt="login" fill className='object-cover'/>
        </div>
        {/* FORM CONTAINER */}
        <div className='p-10 flex flex-col gap-8'>
          <h1 className='font-bold text-xl xl:text-3xl'>Welcome</h1>
          <p className=''>login </p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src={google} alt="google" width={20} height={20} className='object-contain'/>
            <span>sign in with google</span>
          </button>
          <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
            <Image src={fb} alt="fb" width={20} height={20} className='object-contain'/>
            <span>sign in with faceBook</span>
          </button>
          <p className='text-sm'>problem? <Link className='underline' href="/">Contact us</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage