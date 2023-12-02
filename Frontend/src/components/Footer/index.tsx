"use client";
import Image from "next/image";
import { CallWaiterPopup } from "../Popup/Popup";
import Link from "next/link";
import Divider from "./Divider";

const Footer = () => {
  return (
    <footer className="sticky bottom-[0] z-[99] w-screen px-4 py-6 bg-white shadow-footer overflow-hidden">
      <div className="flex justify-between xl:px-4">
        <CallWaiterPopup />
        <Link
        passHref
      href={'cart'} >

     
    
        <button
          type="button"
          className="bg-primary-100 px-3 w-[10.5rem] py-4 font-medium text-sm text-white rounded-[1.3rem]  shadow-button flex items-center justify-center "

        >
          <Image
            src={"/Carrito.svg"}
            height={30}
            width={30}
            alt="add to cart"
            className="pr-2"
          />
          Carrito
        </button>
        </Link>
      </div>
      <Divider />
    </footer>
  );
};

export default Footer;
