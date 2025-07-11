import React from "react";
import { MiniCategoryCard } from "./miniCategoryCard";
import images from "../assets";

interface CategoryCardProps {
  selectedCategory: string;
  onSelectCategory: (key: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories = [
    { key: "all", label: "All" },
    { key: "finance", label: "Finance" },
    { key: "sports", label: "Sports" },
    { key: "tech", label: "Tech" },
  ];

  return (
    <div className="bg-white h-fit pb-5 w-full mt-6 rounded-xl text-black shadow-lg">
      <div className="px-4 py-2 flex font-semibold">Categories</div>
      <div className="flex flex-row justify-evenly gap-5 px-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelectCategory(cat.key)}
            className={`focus:outline-none w-full ${selectedCategory === cat.key ? "border-b-3 border-blue-500" : ""}`}>
            <MiniCategoryCard title={cat.label} img={images[cat.label as keyof typeof images]} /> 
          </button>
        ))}
      </div>
    </div>
  );
};
