import { Product } from "../../types/Product";
import { useRouter } from "next/navigation";
export default function Button({
  text,
  handleAddToCart,
  product,
}: {
  text: string;
  handleAddToCart: (product: Product) => void;
  product: Product;
}) {
  const router = useRouter();
  const handleAddToCartAndNavigate = (product: Product) => {
    // Call the original handleAddToCart function
    handleAddToCart(product);

    // Navigate to the cart page
    router.push('/cart');
  };
  return (
    <button
      type="button"
      className="w-full md:w-max h-full p-2 md:py-5 md:px-6 bg-primary-100 rounded-3xl text-white shadow-2xl"
      onClick={() => handleAddToCartAndNavigate(product)}
    >
      {text}
    </button>
  );
  }
