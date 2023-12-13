'use client'
import { useNotifyStore } from '@/store/zustand'
import Notification from '../Modal/Notification'
import Image from 'next/image'
import { useState } from 'react'
import { Popup } from './Popup'

export const CallWaiterPopup = () => {
  const [isShowing, setIsShowing] = useState(false)
  const { add, setShowMessageBoolean } = useNotifyStore()

  const handleNotification = () => {
    setTimeout(() => {
      setShowMessageBoolean(false)
    }, 2500)
  }
  const callWaiter = () => {
    const newMessage = {
      text: <p>El mesero vendrá en seguida.</p>,
      svg: '/icon/Group 8.svg',
    }

    add(newMessage)
    setShowMessageBoolean(true)
    handleNotification()
  }

  return (
    <>
      <button
        type='button'
        onClick={() => setIsShowing(true)}
        className="bg-secondary-100 px-3 h-[2.5rem] w-[9.5rem] py-4 font-medium text-[0.75rem] text-white rounded-[1.3rem]  shadow-button flex items-center justify-center"
      >
        <Image
          src={'/Call.svg'}
          height={29}
          width={29}
          alt='call waiter'
          className='pr-2'
        />
        Llamar mesero
      </button>

      <Popup
        title='Llama al mesero'
        onCancel={() => setIsShowing(false)}
        cancelText='Cancelar'
        onConfirm={callWaiter}
        confirmText='Llamar'
        show={isShowing}
        color='secondary'
      >
        ¿Tienes alguna duda? Llama al mesero para que te atienda.
      </Popup>
      <Notification />
    </>
  )
}
