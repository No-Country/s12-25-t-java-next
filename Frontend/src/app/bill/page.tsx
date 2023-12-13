'use client'
import Button from '@/components/Button'
import HeaderBack from '@/components/Header/HeaderBack'
import { useCartStore } from '@/store/cart'

export default function BillPages() {
  // const {cart,subtotal} = useCartStore()
  // const total = subtotal()

  return (
    <section className='bg-white min-h-[90vh] relative'>
      <HeaderBack text='Factura ' />
      <div className='px-5 mt-5 '>
        {/* cart.map((product) => (  */}
        {/* <div>
            <h1 className={`text-black h-4 text-base font-normal font-sans my-2 ${product.id.length > 1 ? "" : "border-t-2 border-[#E8E8E8]"}`}>
              {product.title} 
            </h1>
            <span className="text-lg font-semibold font-sans mt-[6px]">
              ${product.price} 
            </span>
          </div>
        ))} 
        <div className="text-end">
          <h2 className="h-6 text-zinc-900 text-base font-medium font-sans">
            Subtotal
          </h2>
           <span className="text-[22px] font-medium font-sans">${total}</span> 
        </div>  */}
      </div>
      <div className='px-4 mt-2 absolute bottom-0 w-full'>
        <button
          type='button'
          className='py-2 text-center bg-primary-100 text-white rounded-3xl w-full shadow-md shadow-grey'
        >
          Continuar
        </button>
      </div>
    </section>
  )
}
