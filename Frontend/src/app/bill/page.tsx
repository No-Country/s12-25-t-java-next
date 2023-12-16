
import HeaderBack from '@/components/Header/HeaderBack'
import BillContent from './billContent'
import { getOrder} from '@/lib/Orders'



 export default async function BillPages({searchParams}:{searchParams: {order:number}}) {
  
  const orders = await getOrder(searchParams.order)
 

  return (
    <section className='bg-white min-h-[90vh] relative'>
      <HeaderBack text='Factura ' />
      { orders?.detail.map((product:any,index:number) => ( 
       <BillContent key={index} product={product} />
       ))} 
       <div className="text-end px-5 mt-2">
          <h2 className="h-6 text-zinc-900 text-base font-medium font-sans">
            Subtotal
          </h2>
           <span className="text-[22px] font-medium font-sans">{orders?.total}</span> 
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
