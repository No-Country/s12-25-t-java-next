import { Header } from "@/components";
import { CartList } from '@/components/cart/CartList'
import SummaryCart from "@/components/cart/SummaryCart";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cart | AlaCartApp",
  description: 'Carrito de pedidos'
};
const CartPage = () => {

  return (
    <div>

      <CartList />
      <SummaryCart />
    
    </div>
  );
};

export default CartPage;
