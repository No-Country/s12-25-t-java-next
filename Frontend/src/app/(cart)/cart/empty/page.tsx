import React from 'react'
import CartEmpty from '@/components/cart/CartEmpty'
import HeaderBack from '@/components/Header/HeaderBack'
import FooterCart from '@/app/ui/footercart'

const CartEmptyPage = () => {
  return (
    <div className='w-screen'>
      <HeaderBack text='Carrito' />
      <CartEmpty />
      <FooterCart  />
    </div>
  )
}

export default CartEmptyPage
