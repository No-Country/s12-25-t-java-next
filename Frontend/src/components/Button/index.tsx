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
      className="w-full py-5 px-3 bg-primary-100 rounded-3xl text-white shadow-2xl"
      onClick={() => handleAddToCart(product)}
    >
      {text}
    </button>
  );
}
