import React, { useContext } from "react";
import { InventoryContext } from "../../App";
import { Link } from "react-router-dom";

function CategoryNav() {
  const { categories } = useContext(InventoryContext);

  return (
  categories.length &&
      <nav className="space-x-8 py-2" aria-label="Global">
      <div className="flex justify-between xl:mx-80 lg:mx-60 md:mx-40 mx-10">
        {categories && categories.map((item) => (
          <Link
            key={item.id}
            to={`/browse?category=${item.id}`}
            className="text-gray-900 inline-flex items-center py-2 px-3 text-sm font-medium"
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  
  );
}

export default CategoryNav;
