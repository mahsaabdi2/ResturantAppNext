import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-1/2 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-start justify-between'>
      <Link href="/" className='font-bold text-xl'>AZALIA</Link>
    </div>
  )
}

export default Footer