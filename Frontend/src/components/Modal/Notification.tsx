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
          ? "fixed z-[100] bg-secondary-100 w-[100vw] md:w-[24rem] h-28 rounded-b-lg text-white  top-[0%] right-[0%] px-4  flex items-center justify-between ease-in-out duration-500"
          : "fixed top-[-100%] "
      }
    >
      {message && "text" in message && (
        <>
          <Image
            src={message.svg}
            width={8} 
            height={8}
            alt="notification waiter"
            className=" w-[26.2%] h-[112px] pt-[1.2rem]"
          />
          {/* <div dangerouslySetInnerHTML={formattedText} className="font-sans text-[1rem] ml-[0.3rem]"> {message.text}</div>{" "} */}
          <div>{message.text}</div>
        </>
      )}
    </div>
  );
};

export default Notification;
