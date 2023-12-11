"use client";
import Image from "next/image";
import { CallWaiterPopup } from "../Popup/CallWaiterPopup";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";

const Footer = () => {
  const { quantity } = useCartStore();
  const [totalCart, setTotalCart] = useState(0);

  // FIX: jump at start

  useEffect(() => {
    if (quantity) {
      setTotalCart(quantity);
    }
  }, [quantity]);

  return (
    <footer className="sticky bottom-[0] z-[99] w-screen px-4 py-6 bg-white shadow-footer overflow-hidden">
      <div className="flex justify-between xl:px-4">
        <CallWaiterPopup />
        <Link passHref href={"cart"}>
          <button
            type="button"
            className="bg-primary-100 px-3 w-[10.5rem] ml-1 py-4 font-medium text-[0.75rem] text-white rounded-[1.3rem]  shadow-button flex items-center justify-center "
          >
            <Image
              src={"/Carrito.svg"}
              height={29}
              width={29}
              alt="add to cart"
              className="pr-2"
            />
            Carrito {totalCart ? `(${totalCart})` : ""}
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
