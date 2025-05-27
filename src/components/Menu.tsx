'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import openimage from "../../public/open.png"
import close from "../../public/close.png"
import Link from 'next/link'
import CartIcon from './CartIcon'

const links=[
    {id:1 , title:"خانه" , url:"/"},
    {id:2 , title:"منو" , url:"/"},
    {id:3 , title:"ساعات کاری" , url:"/"},
    {id:4 , title:"ارتباط با ما" , url:"/"},
]

function Menu() {
    const [open , setOpne]=useState(false);
    const user=false
  return (
    <div>
        {!open ?(
            <Image src={openimage} alt="open" width={20} height={20} onClick={()=>setOpne(true)}/>
        ):(
            <Image src={close} alt="close" width={20} height={20} onClick={()=>setOpne(false)}/>
        )
        }

        {open &&
        <div className='bg-red-500 text-white absolute left-0 top-24  h-[calc(100vh-6rem)] flex items-center z-10 justify-center w-full text-3xl flex-col gap-8'>
            {
                links.map((item)=>(
                    <Link key={item.id} href={item.url} onClick={()=>setOpne(false)}>
                        {item.title}</Link>
                ))
            }

            {!user ? (<Link href="/login" onClick={()=>setOpne(false)}>ورود</Link>
            ):(
            <Link href="/orders" onClick={()=>setOpne(false)}>سفارشات</Link>)}

            <Link href="/cart" onClick={()=>setOpne(false)}>
                <CartIcon/>
            </Link>
        </div>

        }
    </div>
  )
}

export default Menu