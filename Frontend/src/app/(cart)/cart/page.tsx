"use client";
import { useEffect } from "react";

import { CartList } from "@/components/cart/CartList";
import SummaryCart from "@/components/cart/SummaryCart";

import React from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import Divider from "@/components/Footer/Divider";

const CartPage = () => {
  const { cart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.replace("cart/empty");
    }
  }, [cart, router]);

  if (cart.length === 0) {
    return <></>;
  }
  return (
    <div>
      <CartList />
      <SummaryCart />
      <footer className=" fixed bottom-0  px-4 py-3 w-screen">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="border-2 border-primary-100 px-5 py-2 rounded-[1.3rem]"
          >
            Ver Ticket
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="border-none bg-primary-100 hover:bg-primary-200 px-5 py-2 rounded-[1.3rem]"
          >
            Realizar pedido
          </button>
        </div>
        <Divider />
      </footer>
    </div>
  );
};

export default CartPage;
