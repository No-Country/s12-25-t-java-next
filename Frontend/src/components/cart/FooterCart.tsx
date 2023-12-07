"use client"
import React, { useEffect, useState, lazy, Suspense } from "react";
import { useCartStore } from "@/store/cart";
import { useNotifyStore } from "@/store/zustand";
import { Divider } from "@mui/material";

const FooterCart = () => {
    const { cart, removeAll, subtotal } = useCartStore();
    const { add, setShowMessageBoolean } = useNotifyStore();
    // useEffect(() => {
    //     setIsClient(true);
    //   }, []);
    
      useEffect(() => {
        subtotal();
      }, [cart, subtotal]);
      const cartSubtotal = subtotal();
    const handleNotification = () => {
        setTimeout(() => {
          setShowMessageBoolean(false);
        }, 2500);
      };
    
      const handleOrder = () => {
    
        const orderData = {
          table: 1,
          date: new Date(),
          state: "pending",
          subTotal: cartSubtotal,
          payment: "inProcess",
          products: cart,
        };
        console.log("order", orderData);
    
        const newMessage = {
          text: (
            <>
              <p>
                La orden ha sido confirmada.
                <br />
                Tu pedido está en camino.
              </p>
            </>
          ),
    
          svg: "/icon/Group 8.svg",
        };
    
        add(newMessage);
        setShowMessageBoolean(true);
        handleNotification();
      };

  return (
    <footer className=" fixed bottom-0  px-4 py-3 w-screen">
    <div className="flex justify-between items-center">
      <button
        type="button"
        className="border-2 w-[10.3rem] h-[2.5rem] text-[0.75rem] border-primary-100 px-5 py-2 font-medium rounded-[1.3rem]"
      >
        Ver Ticket
      </button>
      <button
        onClick={handleOrder}
        type="button"
        className="border-none w-[10.3rem] h-[2.5rem] text-[0.75rem] ml-1 bg-primary-100 hover:bg-primary-200 font-medium px-5 py-2 rounded-[1.3rem]"
      >
        Realizar pedido
      </button>
    </div>

    <Divider />
  </footer>
  )
}

export default FooterCart