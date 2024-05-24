"use client";
import React, { useState } from "react";
import { LuQrCode } from "react-icons/lu";

async function downloadQrCode(id: string) {
  console.log("downloadQrCode", id);
  const response = await fetch(
    `http://localhost:3005/api/knowledge/${id}/qrcode`,
    {
      method: "GET",
    }
  );

  const data = await response.text();
  const url = `data:image/png;base64,${data}`;

  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", "qrcode.png");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}
const QrCodeAction = ({ id }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await downloadQrCode(id);
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-black p-2 rounded-[15px]"
      disabled={isLoading}
    >
      <LuQrCode color="white" className="icon-size" />
    </button>
  );
};

export default QrCodeAction;
