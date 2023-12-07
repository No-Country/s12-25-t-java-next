"use client";

import { useCartStore } from "@/store/cart";
import { Product } from "@/types/Product";
import { IOrderItem } from "@/types/order";
import { format } from "@/utils/currency";
import Image from "next/image";
import Counter from "../Counter";

interface Props {
  editable?: boolean;
  products?: IOrderItem[];
}

 const CartList = ({ editable = false, products }: Props) => {
  const { cart, add, remove, removeProduct } = useCartStore();

  const onNewCartQuantityValue = (product: Product) => {
    add(product);
  };

  return (
    <div>
      {cart.map((product) => (
        <div
          className="mx-4 py-5 flex flex-col bottom-1 border-b-[1px] border-grey"
          key={product.id}
        >
          <div className="flex justify-between text-lg font-medium text-gray-900">
            <h2>{product.title}</h2>
            <Image
              onClick={() => removeProduct(product.id)}
              src={"/icon/Trash.svg"}
              height={20}
              width={20}
              alt="delete"
            />
          </div>

          <div className="flex mt-2 items-end justify-between text-lg font-semibold">
            <p className="">{format(product.price)}</p>
            <Counter product={product} sm />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList