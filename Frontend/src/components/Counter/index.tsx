import Image from 'next/image'
import { Product } from '@/types/Product';
import { useCartStore } from '@/store/cart';

type Props = {
  sm?: boolean
  counter: number
  handleAdd: () => void
  // handleAdd: (product: Product, quantity?: number | undefined) => void
  handleRemove: () => void
  product: Product
}

export default function Counter({
  sm = false,
  counter,
  product,
  handleAdd,
  handleRemove,
}: Props) {
  const { cart, add, remove, removeProduct } = useCartStore();
 
  // console.log("catidad",quantityPerProduct(product.id))
  return (
    <div
      className={`${
        sm ? 'w-20 h-8 gap-2 px-1' : 'w-36 h-10 p-1.5 gap-6 text-2xl'
      } font-semibold shadow-buttoncart bg-white text-font rounded-3xl flex items-center justify-around`}
    >
      <button
        type='button'
        className={`${
          sm ? 'w-6 h-6' : 'w-8 h-6'
        } text-center flex items-center justify-center text-white font-bold rounded-full`}
        onClick={handleRemove}
      >
        <Image width={32} height={32} src={'/minusIcon.svg'} alt='minus icon' />
      </button>
      <span>{counter}</span>
      <button
        type='button'
        className={`${
          sm ? 'w-6 h-6' : 'w-8 h-8'
        } text-center flex items-center justify-center text-white font-bold rounded-full`}
        onClick={handleAdd}
      >
        <Image width={32} height={32} src={'/plusIcon.svg'} alt='minus icon' />
      </button>
    </div>
  )
}
