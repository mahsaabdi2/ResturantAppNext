'use client'

import { useCart } from "@/app/context/UseCart";
import { burgers, pizzas , pastas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const CategoryPage = () => {

  const {category}=useParams();


  let data = [];

  if (category === "pizzas") {
    data = pizzas;
  } else if (category === "burgers") {
    data = burgers;
  } else if (category === "pastas") {
    data = pastas;
  } else {
    
    return <div className="text-center w-full py-10 text-xl">دسته‌بندی یافت نشد 😕</div>;
  }
  
   return (
    <div className="flex flex-wrap text-red-500">
      {data.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">T{item.price}</h2>
            <button
              className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md"
              onClick={(e) => {
                e.preventDefault()}}>اضافه به سبد خرید</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;