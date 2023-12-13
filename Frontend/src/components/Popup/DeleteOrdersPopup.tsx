import { useState } from "react";
import { Popup } from "./Popup";
import { useCartStore } from "@/store/cart";

export const DeleteOrdersPopup = () => {
  const [isShowing, setIsShowing] = useState(false);
  const removeAll = useCartStore((state) => state.removeAll);

  const confirm = () => {
    removeAll();
    setIsShowing(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsShowing(true)}
        className="font-semibold text-black pr-4"
      >
        Vaciar
      </button>

      <Popup
        title="Ops!"
        onCancel={() => setIsShowing(false)}
        cancelText="Cancelar"
        onConfirm={confirm}
        confirmText="Si, eliminar"
        show={isShowing}
        color="primary"
      >
        ¿Estás seguro que deseas eliminar todos los productos del carrito?
      </Popup>
    </>
  );
};
