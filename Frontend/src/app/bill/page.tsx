"use client"
import HeaderBack from '@/components/Header/HeaderBack'
import BillContent from './billContent'
import useSWR from 'swr';
import { useSessionOrderStore } from '@/store/order';

 export default function BillPages() {
  const { sesionOrder} = useSessionOrderStore();
  
  const fetcher = (url: string) => fetch(url).then(res => res.json());

 const { data } = useSWR(
   `${process.env.NEXT_PUBLIC_API}/orders/${sesionOrder}`,
   fetcher
 );
 console.log(data)
  
 

  return (
    <section className='bg-white min-h-[90vh] relative'>
      <HeaderBack text='Factura ' />
      { data?.detail?.map((product:any,index:number) => ( 
       <BillContent key={index} product={product} />
       ))} 
       <div className="text-end px-5 mt-2 pb-16">
          <h2 className="h-6 text-zinc-900 text-base font-medium font-sans">
            Subtotal
          </h2>
           <span className="text-[22px] font-medium font-sans ">${data?.subtotal}</span> 
        </div> 
      <div className='px-4 pb-5 mt-2 absolute bottom-0 w-full'>
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
