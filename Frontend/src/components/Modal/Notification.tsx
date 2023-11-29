"use client";
import useShowNotification from "@/hooks/useShowNotification";
import { useNotifyStore } from "@/store/zustand";
import Image from "next/image";

interface Props {}

const Notification = () => {
  const { message, add, showMessageBoolean, setShowMessageBoolean } =
    useNotifyStore();
  console.log("mensaje de notificacion", message);
  console.log("mensaje de notificacion", message.svg);

  return (
    <div
      className={
        showMessageBoolean && message
          ? "fixed z-[100] bg-secondary-100 w-[100vw] md:w-[24rem] h-28 rounded-b-lg text-white  top-[0%] md:right-[0%] px-8 py-4 flex items-center justify-between ease-in-out duration-500"
          : "fixed top-[-100%] "
      }
    >
      {message.text && (
        <>
          <Image
            src={message.svg}
            width={30}
            height={30}
            alt="notification waiter"
          />
          <h3 className="font-montserrat"> {message.text}</h3>{" "}
        </>
      )}
    </div>
  );
};

export default Notification;
