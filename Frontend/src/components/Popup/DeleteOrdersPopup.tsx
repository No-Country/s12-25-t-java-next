import { useState } from "react";
import { Popup } from "./Popup";

export const DeleteOrdersPopup = () => {
  const [isShowing, setIsShowing] = useState(false);

  const confirm = () => {
    // Todo para Ysis: Logica para vaciar el carrito
  };

  return (
    <>
      {/* <button type="button" onClick={() => setIsShowing(true)}>
        Vaciar
      </button> */}

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
