'use client'

import { createContext, useEffect, useState, ReactNode } from 'react';

interface Product  {
  id: string | number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  quantity?:number ;
  options?: { title: string; additionalPrice: number }[];
  selectedOptionIndex?: number;
};


interface CartContextType{
    cart:Product[],
    totalQuantity: number,
    addToCart:(product:Product)=>void,
    removeFromCart:(productId:string|number)=>void,
    updateQuantity:(productId:string|number , value:number)=>void,
    getTotal:()=>number,
    clearCart:()=>void,
    updateSelectedOption:(productId: string | number, optionIndex: number )=>void
}


export const CartContext=createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export default function CartProvider({children}:CartProviderProps){

    const [cart , setCart]=useState<Product[]>([]);

     const [totalQuantity, setTotalQuantity] = useState(0);

  // هر وقت cart تغییر کرد، مجموع quantity ها رو حساب کن
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0);
    setTotalQuantity(total);
  }, [cart]);

    useEffect(()=>{
        
    })

 function addToCart(product: Product) {
  setCart(prev => {
    const selectedProduct = prev.find(item => item.id === product.id);
    if (!selectedProduct) {
      return [...prev, { ...product, quantity: 1, selectedOptionIndex: product.selectedOptionIndex ?? 0 }];
    } else {
      // این قسمت عملاً کوانتیتی رو افزایش میده اگر محصول باشه
      return prev.map(item =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity ?? 1) + 1,
              selectedOptionIndex: product.selectedOptionIndex ?? item.selectedOptionIndex ?? 0,
            }
          : item
      );
    }
  });
}


function updateSelectedOption(productId: string | number, optionIndex: number) {
  setCart(prev =>
    prev.map(item =>
      item.id === productId ? { ...item, selectedOptionIndex: optionIndex } : item
    )
  );
}


  function removeFromCart(productId:string | number){
    setCart(prev=>prev.filter(item=> item.id !== productId))
  }

 function updateQuantity(productId: string | number, value: number) {
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: value } : item
      )
    );
  }

   function getTotal() {
  return cart.reduce((total, item) => total + (item.quantity ?? 1) * item.price, 0);
}


  function clearCart() {
    setCart([]);
  }
return (
    <CartContext.Provider value={{ cart,addToCart, removeFromCart,updateQuantity,getTotal,clearCart , updateSelectedOption , totalQuantity}}>
      {children}
    </CartContext.Provider>
  );
}
