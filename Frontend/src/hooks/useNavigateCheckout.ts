import { useRouter } from "next/navigation";
import { useSessionOrderStore } from '../store/order';

export const useNavigateCheckout = (sesionOrder: number | null) => {
  const route = useRouter();

  const navigateCheckout = (sesionOrder: number | null ) => {
    console.log("sesion order ", sesionOrder)
    if (sesionOrder){

      route.push(`/bill?order=${String(sesionOrder)}`);
    }
  };
    return {
      navigateCheckout,
      
     };
  };