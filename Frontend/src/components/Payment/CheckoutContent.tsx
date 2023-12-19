"use client"
import React, {useState} from "react";

import { OrderDetail } from "@/types/order";
import { format } from "../../utils/currency";
import Checkout from "./Checkout";

export default function CheckoutContent({
  products,
  total,
}: {
  products: OrderDetail[];
  total: number;
}) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (method: string) => {
    setPaymentMethod(method);
  };
  console.log("tipo de pago ",paymentMethod)
  return (
    <>
    <Checkout
    paymentMethod={paymentMethod}
    handlePaymentChange={handlePaymentChange}/>
    
      {products.map((product) => (
        <div className="px-5 mt-5  ">
          <h2 className="font-semibold text-[1.125rem]">Resumen</h2>
          <div className=" mt-1 flex justify-between">
            <h1 className="text-black h-4 text-base font-normal font-sans my-2  ">
              {product.product.name}
            </h1>

            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold font-sans mt-[6px] ">
                ${product.product.price}
              </span>
              <span className="text-lg font-semibold font-sans mt-[6px] ">
                {product.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="px-5 mt-5 flex items-end justify-end flex-col  ">
        <h2 className="text-[1rem] font-medium">Total</h2>
        <h2 className="text-[1.375rem] font-semibold">{format(total)}</h2>

        <button
          type="button"
          className="py-2 mt-6 text-center bg-primary-100 text-white rounded-3xl w-full shadow-md shadow-grey"
        >
          Pagar
        </button>
      </div>
    </>
  );
}
