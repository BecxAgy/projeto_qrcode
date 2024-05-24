import React from "react";
import { LuEye } from "react-icons/lu";

type Props = {
  quantity_views: number;
};

const VisitsCount = ({ quantity_views }: Props) => {
  return (
    <div className="flex gap-1 my-auto">
      <LuEye className="icon-size-28" />
      <p className="text-[#949494] medium-12 my-auto">{quantity_views}</p>
    </div>
  );
};

export default VisitsCount;
