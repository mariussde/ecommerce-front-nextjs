import React from 'react';

const CategoryFilter: React.FC = () => {
  const categories = [
    "People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"
  ];

  return (
    <aside className="flex flex-col items-start self-start mt-1.5 text-2xl whitespace-nowrap text-stone-900">
      <h2 className="font-bold text-black">Category</h2>
      {categories.map((category, index) => (
        <div key={index} className="flex gap-6 mt-10">
          <div className="flex shrink-0 self-start border-2 border-black border-solid h-[23px] w-[23px]" />
          <div>{category}</div>
        </div>
      ))}
    </aside>
  );
};

export default CategoryFilter;