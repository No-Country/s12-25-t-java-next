"use client";

import { useCartStore } from "@/store/cart";
import { Product } from "@/types/Product";
import { CartItem } from "@/types/order";

import { format } from "@/utils/currency";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  editable?: boolean;
  products?: CartItem[];
}

 const CartList = () => {
  const { cart, add, remove, removeProduct } = useCartStore();
  const router = useRouter();
  useEffect(() => {
    if ( cart.length === 0) {
      router.replace("cart/empty");
    }
  }, [ cart, router]);
  
  return (
    <div>
      {cart.map((product) => (
        <div
          className="mx-4 py-5 flex flex-col bottom-1 border-b-[1px] border-grey"
          key={product.id}
        >
          <div className="flex justify-between text-lg font-medium text-gray-900">
            <h2>{product.name}</h2>
            <button
        type='button'
        className={"w-6 h-6 text-center flex items-center justify-center text-white font-bold rounded-full"}
        onClick={() => removeProduct(product.id)}
      >
           <Image
              onClick={() => removeProduct(product.id)}
              src={"/icon/Trash.svg"}
              height={20}
              width={20}
              alt="delete"
            />
        
      </button>
         
          </div>

          <div className="flex mt-2 items-end justify-between text-lg font-semibold">
            <p className="">{format(product.price * product.quantity)}</p>
            <div className="w-[5.2rem] flex justify-between items-center h-8 shadow-buttoncart rounded-[2rem]">
              <button
                type="button"
                className="bg-secondary-100 rounded-full w-[1.5rem] h-[1.5rem]"
                onClick={() => remove(product.id)}
              >
                <Image
                  priority
                  src="/icon/Minus.svg"
                  height={20}
                  width={30}
                  alt="remove item to cart"
                />
              </button>
              <p className=" text-sm text-gray-500">{product.quantity}</p>

              <button
                type="button"
                onClick={() => add(product)}
                className="bg-secondary-100 rounded-full w-[1.5rem] h-[1.5rem]"
              >
                <Image
                  priority
                  src="/icon/Plus.svg"
                  height={30}
                  width={30}
                  alt="Add to cart"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList