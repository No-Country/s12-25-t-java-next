"use client";
import Image from "next/image";
import { CallWaiterPopup } from "../Popup/Popup";
import Divider from "./Divider";

const Footer = () => {
  return (
    <footer className="sticky bottom-[0] z-[99] w-screen px-4 py-6 bg-white shadow-footer overflow-hidden">
      <div className="flex justify-between xl:px-4">
        <CallWaiterPopup />
        <button
          type="button"
          className="bg-primary-100 p-3 rounded-full shadow-button"
        >
          <Image
            src={"/Carrito.svg"}
            height={30}
            width={30}
            alt="add to cart"
          />
        </button>
      </div>
      <Divider />
    </footer>
  );
};

export default Footer;
