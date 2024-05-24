"use client";
import React, { useState } from "react";
import { LuQrCode } from "react-icons/lu";
import { saveAs } from "file-saver";

async function downloadQrCode(id: string) {
  console.log("downloadQrCode", id);
  const response = await fetch(
    `http://localhost:3005/api/knowledge/${id}/qrcode`,
    {
      method: "POST",
    }
  );

  const data = await response.json();
  const url = data.qrCode;
  console.log("downloadQrCode", url);

  // Remove o prefixo 'data:image/png;base64,' dos dados
  const base64Data = url.replace("data:image/png;base64,", "");

  // Converte a URL base64 em um Blob
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "image/png" });

  // Usa a biblioteca file-saver para fazer o download do Blob
  saveAs(blob, "qrcode.png");
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
