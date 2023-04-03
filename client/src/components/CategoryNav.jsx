import React, { useContext } from "react";
import { InventoryContext } from "../App";
import { Link } from "react-router-dom";


const navigation = [
  { name: "Audio", href: "/browse/audio", current: true },
  { name: "Lighting", href: "/browse/lighting", current: false },
  { name: "Video", href: "/browse/video", current: false },
  { name: "LED", href: "/browse/led", current: false },
];

function CategoryNav() {
  const { categories } = useContext(InventoryContext)

  // console.log(categories)

  return (
    <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
      {categories.map((item) => (
        <Link
          key={item.name}
          to={`/browse/${item.name}`}
          className="bg-gray-100 text-gray-900 text-gray-900 hover:bg-gray-50 hover:text-gray-900 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
          </Link>
      ))}
    </nav>
  );
}

export default CategoryNav;
