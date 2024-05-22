import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 left-0 bg-[#f9f9f9] z-30  flex w-full justify-between border-b shadow-md py-4 px-6">
        <Image
          src={"/logo.svg"}
          width={74}
          height={74}
          alt="Logo da Kempetro laranja e preto"
        />
      </nav>
    </header>
  );
};

export default Navbar;
