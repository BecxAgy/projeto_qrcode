import React from "react";

interface CategoryChipProps {
  category: string;
  color: string;
}

export default async function CategoryChip({
  category,
  color,
}: CategoryChipProps) {
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className="max-h-[30px] my-auto rounded-[15px]"
    >
      <p className="text-black text-center px-4 py-1 medium-12 whitespace-nowrap">
        {category}
      </p>
    </div>
  );
}
