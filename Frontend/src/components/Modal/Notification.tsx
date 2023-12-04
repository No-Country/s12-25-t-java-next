"use client";
import { useNotifyStore } from "@/store/zustand";

import Image from "next/image";

const Notification = () => {
  const { message, add, showMessageBoolean, setShowMessageBoolean } =
    useNotifyStore();

  return (
    <div
      className={
        showMessageBoolean && message
          ? "fixed z-[100] bg-secondary-100 w-[100vw] md:w-[24rem] h-28 rounded-b-lg text-white  top-[0%] md:right-[0%] px-4  flex items-center justify-between ease-in-out duration-500"
          : "fixed top-[-100%] "
      }
    >
      {message && "text" in message && (
        <>
          <Image
            src={message.svg}
            width={25}
            height={25}
            alt="notification waiter"
            className="object-cover w-[6.5rem] h-full pt-1"
          />
          <h3 className="font-sans"> {message.text}</h3>{" "}
        </>
      )}
    </div>
  );
};

export default Notification;
