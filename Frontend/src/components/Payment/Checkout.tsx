import BillContent from "@/app/bill/billContent";
interface Props {
  handlePaymentChange: (method: string) => void
  paymentMethod: string
}
const Checkout = ({handlePaymentChange, paymentMethod }:Props) => {

  return (
    <>
      <form className=" max-w-xl mx-auto bg-whiteAdminBackground">
        <div className="mt-5 mx-3 grid gap-6">
          <h2 className="font-semibold text-[1.125rem]">Método de Pago</h2>
          <div className="relative">
            <input
              className="peer hidden"
              id="radio_1"
              type="radio"
              name="radio"
              checked={paymentMethod === "efectivo"}
              onChange={() => handlePaymentChange("efectivo")}
            />
            <span className="peer-checked:border-secondary-100 absolute right-4 top-1/2 box-content block w-[1.2rem] h-[1.2rem] -translate-y-1/2 rounded-full border-8  border-gray-300 bg-whiteAdminBackground "></span>
            <label
              className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-whiteAdminBackground flex cursor-pointer select-none rounded-lg border  border-primary-100 p-4"
              htmlFor="radio_1"
            >
              <div className="">
                <span className="mt-2 font-semibold">Efectivo</span>
                <p className="text-slate-500 text-[0.625rem] leading-5">
                  El mesero se acercará a cobrar tu pedido
                </p>
              </div>
            </label>
          </div>
          <div className="relative">
            <input
              className="peer hidden"
              id="radio_2"
              type="radio"
              name="radio"
              checked={paymentMethod === "tarjeta"}
              onChange={() => handlePaymentChange("tarjeta")}
            />
            <span className="peer-checked:border-secondary-100 absolute right-4 top-1/2 box-content block h-[1.2rem] w-[1.2rem] -translate-y-1/2 rounded-full border-8 border-gray-300 bg-whitebackground"></span>
            <label
              className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-whiteAdminBackground flex cursor-pointer select-none rounded-lg border border-primary-100 p-4"
              htmlFor="radio_2"
            >
              <div className="">
                <span className="mt-2 font-semibold">
                  Tarjeta de debito o credito
                </span>
                <p className="text-slate-500 text-[0.625rem] leading-5">
                  El mesero se acercará a cobrar tu pedido
                </p>
              </div>
            </label>
          </div>
        </div>
      </form>
      
    </>
  );
};

export default Checkout;
