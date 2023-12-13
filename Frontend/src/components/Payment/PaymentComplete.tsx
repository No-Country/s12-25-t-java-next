import Image from 'next/image'
import CreditCard from '/public/credit-card.svg'
import Button from '@/components/Button'
import HeaderBack from '../Header/HeaderBack'

function PaymentComplete() {
  return (
    <div className='w-full h-full py-10 px-4 flex flex-col items-center justify-between gap-2'>
      <div className='text-center flex flex-col my-8 items-center justify-center gap-4'>
        <Image src={CreditCard} alt='credit card' />
        <h1 className='text-2xl font-semibold my-6'>
          ¡Tu pago se realizó exitosamente!
        </h1>
        <h3 className='text-base font-semibold'>Gracias por tu visita</h3>
        <p className='text-sm font-medium'>¡Te esperamos pronto!</p>
      </div>
      <Button variant='secondary' text='Califica tu experiencia' />
    </div>
  )
}

export default PaymentComplete
