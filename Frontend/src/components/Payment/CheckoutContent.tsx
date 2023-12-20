"use client";
import React, { useState } from "react";

import { OrderDetail } from "@/types/order";
import { format } from "../../utils/currency";
import Checkout from "./Checkout";
import { useSessionOrderStore } from "@/store/order";
import { useRouter } from "next/navigation";
import { useNotifyStore } from "@/store/zustand";
export default function CheckoutContent({
  products,
  total,
}: {
  products: OrderDetail[];
  total: number;
}) {
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
  const { add, setShowMessageBoolean } = useNotifyStore();
  const { sesionOrder } = useSessionOrderStore();
  const router = useRouter();
  const handlePaymentChange = (method: string) => {
    setPaymentMethod(method);
  };
  const handleNotification = () => {
    setTimeout(() => {
      setShowMessageBoolean(false);
    }, 2500);
  };
  const orderData = {
    paymentMethod,
  };
  const newMessage = {
    text: <p>El mesero vendrá en seguida.</p>,
    svg: "/icon/Group 8.svg",
  };
  const handleNotificationMessage = () => {
    add(newMessage);
    setShowMessageBoolean(true);
    handleNotification();
  };
  const handlePaymentOrder = async (prop: string) => {
    console.log("el boton submit", orderData);

    try {
      const orderReq = await fetch(
        `${process.env.NEXT_PUBLIC_API}/orders/${sesionOrder}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );
      const orders = await orderReq.json();
      console.log("actualizada la orden", orders);
      handleNotificationMessage();
      router.push("/experience");
      return orders;
    } catch (error) {
      console.log("error updated", error);
    }
  };
  // console.log("tipo de pago ",paymentMethod)
  return (
    <>
    {products && (
      <>
      
      <Checkout
        paymentMethod={paymentMethod}
        handlePaymentChange={handlePaymentChange}
      />
        <div className="px-5 mt-5  ">


<h2 className="font-semibold text-[1.125rem]">Resumen</h2>

      {products?.map((product, key) => (
        <div key={key+1 } className="">
          <div className=" mt-1 flex justify-between">
            <h1 className="text-black h-4 text-base font-normal font-sans my-2  ">
              {product.product.name}
            </h1>

            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold font-sans mt-[6px] ">
              ${parseFloat((product.product.price * product.quantity).toFixed(2))}
              </span>
              <span className="text-lg font-semibold font-sans mt-[6px] ">
                {product.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="px-5 mt-5 flex items-end justify-end flex-col  ">
        <h2 className="text-[1rem] font-medium">Total</h2>
        <h2 className="text-[1.375rem] font-semibold">{format(total)}</h2>

        <button
          type="button"
          onClick={() => handlePaymentOrder(paymentMethod)}
          className="py-2 mt-6 text-center bg-primary-100 text-white rounded-3xl w-full shadow-md shadow-grey"
        >
          Pagar
        </button>
      </div>
      </>
    )}
      
    </>
  );
}
