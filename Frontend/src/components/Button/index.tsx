import { Product } from "../../types/Product";
export default function Button({
  text,
  handleAddToCart,
  product,
}: {
  text: string;
  handleAddToCart: (product: Product) => void;
  product: Product;
}) {
  return (
    <button
      type="button"
      className="w-full md:w-max h-full p-2 md:py-5 md:px-6 bg-primary-100 rounded-3xl text-white shadow-2xl"
      onClick={() => handleAddToCart(product)}
    >
      {text}
    </button>
  );
  }
