import { Header } from "@/components";
import { CartList } from '@/components/cart/CartList'
import SummaryCart from "@/components/cart/SummaryCart";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <Header />
      <CartList />
      <SummaryCart />
    </div>
  );
};

export default CartPage;
