"use client";
import { useNotifyStore } from "@/store/zustand";
import Notification from "../Modal/Notification";
import Image from "next/image";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export const CallWaiterPopup = () => {
  // const [showPoput, setShowPoput] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const { add, setShowMessageBoolean } = useNotifyStore();

  const handleNotification = () => {
    setTimeout(() => {
      setShowMessageBoolean(false);
    }, 2500);
  };
  const callWaiter = () => {
    const newMessage = {
      text: "El mesero vendrá en seguida.",
      svg: "/icon/Group 8.svg",
    };

    add(newMessage);
    setShowMessageBoolean(true);
    handleNotification();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsShowing(true)}
        className="bg-secondary-100 p-3 rounded-full shadow-button flex items-center justify-center"
      >
        <Image src={"/Call.svg"} height={30} width={30} alt="call waiter" />
      </button>

      <Transition
        show={isShowing}
        className="transition fixed bottom-0 inset-x-0 w-full px-4 font-sans"
        enter="duration-500"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="duration-500"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <div className="bg-white h-44 w-full rounded-3xl shadow-2xl">
          <h1 className="text-xl font-bold pl-7 pt-3 pb-1">Llama al mesero</h1>
          <div className="border border-grey/30 w-full" />
          <div className="pt-3 pb-6 px-6">
            <div className="pb-2">
              ¿Tienes alguna duda? Llama al mesero para que te atienda.
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsShowing(false)}
                className="w-28 rounded-3xl py-2 text-center font-medium text-secondary-100 border border-secondary-100 shadow-xl"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={callWaiter}
                className="w-28 rounded-3xl py-2 text-center font-medium text-white bg-secondary-100 shadow-xl"
              >
                Llamar
              </button>
            </div>
          </div>
        </div>
      </Transition>

      <Notification />
    </>
  );
};
