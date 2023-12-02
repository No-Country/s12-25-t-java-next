import React from "react";
import { DeleteOrdersPopup } from "../Popup/DeleteOrdersPopup";

const Divider = () => {
  return (
    <div className="flex items-center justify-center pt-2">
      <div className="bg-black w-[72px] h-[2px] rounded-lg" />
      <DeleteOrdersPopup />
    </div>
  );
};

export default Divider;
