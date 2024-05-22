import React from "react";
import { LuQrCode } from "react-icons/lu";

const QrCodeAction = () => {
  return (
    <button className="bg-black p-3 rounded-[15px]">
      <LuQrCode color="white" className="icon-size" />
    </button>
  );
};

export default QrCodeAction;
