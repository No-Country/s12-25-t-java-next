import Button from '@/components/Button'
import CardErrorSvg from './CardErrorSvg'

function PaymentError() {
  return (
    <div className='w-full h-full py-10 px-4 flex flex-col items-center justify-between gap-2'>
      <div className='text-center flex flex-col my-8 items-center justify-center gap-4'>
        <CardErrorSvg />
        <h1 className='text-2xl font-semibold my-6'>
          Ha ocurrido un error con tu pago
        </h1>
      </div>
      <Button variant='primary' text='Reintentar pago' cn='w-full' />
    </div>
  )
}

export default PaymentError
