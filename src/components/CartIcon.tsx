'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cart from "../../public/cart.png"

function CartIcon() {

  return (
    <Link href="/cart" className='flex items-center gap-1'>

        <span>سبد خرید</span>
        <div className='relative w-8 h-8'>
            <Image alt="cart" src={cart} fill/>
        </div>
        
        
    </Link>
  )
}

export default CartIcon