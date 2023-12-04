
import HeaderBack from "@/components/Header/HeaderBack";
import CartEmpty from "@/components/cart/CartEmpty";
import React from "react";

const CartEmptyPage = () => {
  return (
    <div className="w-screen">
      <HeaderBack editable text="Carrito" />
      <CartEmpty />
    </div>
  );
};

export default CartEmptyPage;
