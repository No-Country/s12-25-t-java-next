"use client";
import { useEffect } from "react";

import { Header } from "@/components";
import { CartList } from "@/components/cart/CartList";
import SummaryCart from "@/components/cart/SummaryCart";

import React from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";

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
    </div>
  );
};

export default CartPage;
