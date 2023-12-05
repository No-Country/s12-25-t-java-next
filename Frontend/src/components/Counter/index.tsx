"use client";

import Image from "next/image";
// import { useCounterStore } from "@/store/zustand";
import { Product } from "@/types/Product";
import { useCartStore } from "@/store/cart";

type Props = {
  product: Product;
};
export default function Counter({ product }: Props) {
  // const { count, increment, decrement } = useCounterStore();
  const { add: handleAddToCart, remove, cart } = useCartStore();
  console.log("visualizar",cart);
  const totalQuantity = cart.reduce((accumulatedQuantity, item) => {
    if (item.id === product.id) {
      return accumulatedQuantity + item.quantity;
    }
    return accumulatedQuantity;
  }, 0);

  // FIX: add colors to tailwind config
  return (
    <div className="w-max p-2 gap-6 font-semibold shadow-2xl bg-[#EBEBEB] text-[#1A1A1A] rounded-3xl flex items-center justify-around">
      <button
        type="button"
        className="w-6 h-6 md:w-8 md:h-8 text-center flex items-center justify-center text-white font-bold rounded-full"
        onClick={() => remove(product.id)}
		// onClick={decrement}
      >
        <Image width={32} height={32} src={"/minusIcon.svg"} alt="minus icon" />
      </button>
      <span>{totalQuantity}</span>
      <button
        type="button"
        className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-white font-bold rounded-full"
        onClick={() => handleAddToCart(product)}
		// onClick={increment}
      >
        <Image width={32} height={32} src={"/plusIcon.svg"} alt="minus icon" />
      </button>
    </div>
  );
}
