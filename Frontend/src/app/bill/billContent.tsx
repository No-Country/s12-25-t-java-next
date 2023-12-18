import { OrderDetail } from "@/types/order";

export default function BillContent({ product}: {product:OrderDetail }) {
  return (
    <div className="px-5 mt-5  ">
      <div className="px-5 mt-5 border-b-2 border-[#E8E8E8]">
        <h1 className="text-black h-4 text-base font-normal font-sans my-2  ">
          {product.product.name}
        </h1>

        <div className="flex flex-row justify-between">
          <span className="text-lg font-semibold font-sans mt-[6px] ">
            ${product.product.price}
          </span>
          <span className="text-lg font-semibold font-sans mt-[6px] ">
            {product.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}
