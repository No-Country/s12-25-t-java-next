import React from "react";
import CartEmpty from "@/components/cart/CartEmpty";
import HeaderBack from "@/components/Header/HeaderBack";

const CartEmptyPage = () => {
  return (
    <div className="w-screen">
      <HeaderBack text="Carrito" />
      <CartEmpty />
    </div>
  );
};

export default CartEmptyPage;
