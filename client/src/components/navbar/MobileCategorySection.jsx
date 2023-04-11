import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { InventoryContext } from "../../App";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MobileCategorySection() {
  const { categories } = useContext(InventoryContext)

  return (
    <div className="space-y-1 px-2 pt-2 pb-3">
      {categories.map((item) => (
        <Link key={item.name} to={`/browse/${item.name}`}>
          <Disclosure.Button
            key={item.name}
            className="bg-gray-100 text-gray-900text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
          >
            {item.name}
          </Disclosure.Button>
        </Link>
      ))}
    </div>
  );
}

export default MobileCategorySection;
