import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image';
import phone from "../../public/phone.png"
const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">خانه</Link>
        <Link href="/menu">منو</Link>
        <Link href="/">ارتباط با ما</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Azalia</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src={phone} alt="" width={20} height={20} />
          <span>+21 100 788</span>
        </div>
        {!user ? (
          <Link href="/login">ورود</Link>
        ) : (
          <Link href="/orders">سفارشات</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar