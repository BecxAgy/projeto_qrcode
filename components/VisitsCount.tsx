import React from "react";
import { LuEye } from "react-icons/lu";

const VisitsCount = () => {
  return (
    <div className="flex gap-1 my-auto">
      <LuEye className="icon-size-28" />
      <p className="text-[#949494] medium-12 my-auto">10</p>
    </div>
  );
};

export default VisitsCount;
