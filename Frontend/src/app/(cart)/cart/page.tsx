import { useRouter } from "next/navigation";
import dynamic, { LoaderComponent } from "next/dynamic";
import FooterCart from "@/components/cart/FooterCart";


const CartList = dynamic(() => import("@/components/cart/CartList"), {ssr:false});
const SummaryCart = dynamic(() => import("@/components/cart/SummaryCart"), {ssr:false});
const HeaderBack = dynamic(() => import("@/components/Header/HeaderBack"), {ssr:false});



const CartPage = () => {


  return (
    <div className="w-full">
       <HeaderBack editable text="Carrito" />
      <CartList />
      <SummaryCart />
     <FooterCart />
    </div>
  );
};

export default CartPage;
