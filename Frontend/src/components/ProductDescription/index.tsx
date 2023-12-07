"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { Product } from "@/types/Product";
import { useRouter } from "next/navigation";
import { useCounterStore } from "@/store/zustand";
import Button from "../Button";
import Counter from "../Counter";
import { format } from "@/utils/currency";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";


type Props = {
  product: Product;
};

export default function ProductDescription({ product }: Props) {
  const { count } = useCounterStore();
  const {  remove, cart } = useCartStore();
  const router = useRouter();
  const handleAddToCart = (product: Product) => {
    // addToCart(product);
    router.push('/cart');
  };
  const totalPrice = cart.reduce((accumulatedPrice, item) => {
    if (item.id === product.id) {
      return accumulatedPrice + item.quantity * item.price;
    }
    return accumulatedPrice;
  }, 0);

  console.log("total price",totalPrice)

  const { title, image, description, price } = product;
  return (
    <div className="w-full h-screen overflow-hidden">
      <button
        onClick={() => router.back()}
        type="button"
        className="absolute w-8 h-8 top-2 left-2 z-10"
      >
        <ArrowLeftIcon className="w-full h-full fill-black" />
      </button>
      <div className="relative h-1/3">
        <Image
          alt={title}
          src={image}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover bottom-4"
        />
        <div className=" w-full h-6 absolute inset-x-0 bottom-0 bg-white rounded-t-3xl" />
      </div>
      <div className="w-full h-full flex flex-col justify-between z-10 shadow-2xl py-2 px-8">
        <div className="w-full h-full flex text-[#1A1A1A] flex-col justify-start gap-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-darkgrey text-sm">{description}</p>
          <span className="font-bold text-lg">${price}</span>
        </div>
        <div className="w-full flex gap-10 justify-between items-center fixed bottom-0 inset-x-0 p-3">
          <Counter product={product} />
          <Button
            text={`Agregar ${format(totalPrice)}`}
            variant="primary"
            onClick={() => handleAddToCart(product)}
          />
        </div>
      </div>
    </div>
  );
}
