'use client'

import React, { useEffect, useState, lazy, Suspense } from 'react'
import { useCartStore } from '@/store/cart'
import { useNotifyStore } from '@/store/zustand'

import { IOrder, IOrderDetail} from '../../types/order';


import ClientButton from './clientbutton';


interface FooterCartProps {
  onCreateOrder?: (orderData: IOrder) => Promise<void>;
}
const FooterCart: React.FC<FooterCartProps> = () => {
  const { cart, subtotal } = useCartStore()
  const { add, setShowMessageBoolean } = useNotifyStore()

  const handleNotification = () => {
    setTimeout(() => {
      setShowMessageBoolean(false)
    }, 2500)
  }

  const tableEntity = {
    id: 1,

  }
  const orderDetail: IOrderDetail[] = Array.isArray(cart)
  ? cart.map((item, key) => {
      const { quantity, id } = item;
      return {
        product: { id: Number(id) }, // Convert id to number if it's a string
        quantity,
      };
    })
  : [];
  // console.log('orden detail', orderDetail)
    const orderData: IOrder = {
      id: 1,
      tableEntity,
      detail: orderDetail,
      paymentMethod: 'efectivo'
    }
    const newMessage = {
      text: (
        <>
          <p>
            La orden ha sido confirmada.
            <br />
            Tu pedido está en camino.
          </p>
        </>
      ),

      svg: '/icon/Group 8.svg',
    }

  const handleNotificationMessage = () => {
   
    add(newMessage)
    setShowMessageBoolean(true)
    handleNotification()


  }

  return (
    

    <footer className=" fixed bottom-0 z-[1] px-4 py-3 w-screen">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="border-2 w-[10.3rem] h-[2.5rem] text-[0.75rem] border-primary-100 px-[1.3125rem] py-[0.625rem] font-medium rounded-[1.3rem]"
        >
          Ver Factura
        </button>
       <ClientButton orderData={orderData} handleNotification={handleNotificationMessage}/>
      </div>
    </footer>
    


  )
}

export default FooterCart


