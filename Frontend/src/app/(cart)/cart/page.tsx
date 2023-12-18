import dynamic from 'next/dynamic'
import FooterCart from '@/app/ui/footercart'

const CartList = dynamic(() => import('@/components/cart/CartList'), {
  ssr: false,
})
const SummaryCart = dynamic(() => import('@/components/cart/SummaryCart'), {
  ssr: false,
})
const HeaderBack = dynamic(() => import('@/components/Header/HeaderBack'), {
  ssr: false,
})

const CartPage = () => {
  return (
    <div className='w-full h-screen bg-whitebackground'>
      <HeaderBack editable text='Carrito' />
      <CartList />
      <SummaryCart />
      <FooterCart />
    </div>
  )
}

export default CartPage
