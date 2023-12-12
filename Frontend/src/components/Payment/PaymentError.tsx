'use client'

import Button from '@/components/Button'
import CardErrorSvg from './CardErrorSvg'
import { useNotifyStore } from '@/store/zustand'
import Notification from '../Modal/Notification'

function PaymentError() {
  // TODO: finish waiter notification

  return (
    <div className='w-full h-full py-10 px-4 flex flex-col items-center justify-between gap-2'>
      <div className='text-center flex flex-col my-8 items-center justify-center gap-4'>
        <CardErrorSvg />
        <h1 className='text-2xl font-semibold my-6 w-4/5'>
          Ha ocurrido un error en tu pago
        </h1>
      </div>
      <div className='w-full flex flex-col gap-4 items-center justify-center'>
        <Button variant='primary' text='Reintentar pago' cn='w-full' />
        <Button variant='outline' text='Llamar al mesero' cn='w-full' />
      </div>
      {/* <Notification /> */}
    </div>
  )
}

export default PaymentError
