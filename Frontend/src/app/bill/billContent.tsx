import { OrderDetail } from "@/types/order";

export default function BillContent({ product }: { product: OrderDetail }) {
  return (
    <div className="px-5 mt-5">
      <div className="border-b-2 border-[#E8E8E8] grid grid-cols-[2.91969rem,1fr]">
        {/* Left column for product.quantity */}
        <div className="col-span-1 flex items-center ">
          <span className="text-lg  font-semibold font-sans mt-[6px]">
            {product.quantity}
          </span>
        </div>

        {/* Right column for product details */}
        <div className="col-span-1 ">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-black h-4 text-base font-normal font-sans my-2">
              {product.product.name}
            </h1>
            <span className="font-sans font-medium text-lg text-[#1A1A1A] h-4">
              ${product.subtotal}
            </span>
          </div>

          <span className="text-lg font-semibold font-sans mt-[6px]">
            ${product.product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
