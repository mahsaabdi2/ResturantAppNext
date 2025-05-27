import React from 'react'

const Orders = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-1'>123456789</td>
            <td className='py-6 px-1'>19.07.2025</td>
            <td className='py-6 px-1'>78T</td>
            <td className='hidden md:block py-6 px-1'>pizza</td>
            <td className='py-6 px-1'>on the way</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>123456789</td>
            <td className='py-6 px-1'>19.07.2025</td>
            <td className='py-6 px-1'>78T</td>
            <td className='hidden md:block py-6 px-1'>pizza</td>
            <td className='py-6 px-1'>on the way</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>123456789</td>
            <td className='py-6 px-1'>19.07.2025</td>
            <td className='py-6 px-1'>78T</td>
            <td className='hidden md:block py-6 px-1'>pizza</td>
            <td className='py-6 px-1'>on the way</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Orders
