
import HeaderBack from '@/components/Header/HeaderBack'
import BillContent from './billContent'

async function getOrders(){
  const res = await fetch("https://657c7288853beeefdb997673.mockapi.io/api/v1/orders/6")
  return res.json()
}
 export default async function BillPages() {
  const orders = await getOrders()
  console.log(orders.detail)
 


  return (
    <section className='bg-white min-h-[90vh] relative'>
      <HeaderBack text='Factura ' />
      { orders.detail.map((product) => ( 
       <BillContent key={product.id} product={product} />
       ))} 
       <div className="text-end px-5 mt-2">
          <h2 className="h-6 text-zinc-900 text-base font-medium font-sans">
            Subtotal
          </h2>
           <span className="text-[22px] font-medium font-sans">{orders.total}</span> 
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
