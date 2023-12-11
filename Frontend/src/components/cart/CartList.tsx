"use client";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { Product } from "@/types/Product";
import { format } from "@/utils/currency";
import Image from "next/image";
import Counter from "../Counter";
import { useEffect } from "react";

interface Props {
  editable?: boolean;
  products?: Product[];
}

const CartList = ({ editable = false, products }: Props) => {
  const { cart, add, remove, removeProduct } = useCartStore();
  const router = useRouter();
  useEffect(() => {
    if (cart.length === 0) {
      router.replace("cart/empty");
    }
  }, [cart, router]);

  if (cart.length === 0) {
    return <></>;
  }
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
            <h2>{product.name}</h2>
            <Image
              onClick={() => removeProduct(product.id)}
              src={"/icon/Trash.svg"}
              height={20}
              width={20}
              alt="delete"
              className="h-[2rem]"
            />
          </div>

          <div className="flex mt-2 items-end justify-between text-lg font-semibold">
            <p className="">{format(product.price * product.quantity)}</p>
            <Counter product={product} sm quantity={product.quantity} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
