import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { InventoryContext } from "../../App";

function Breadcrumbs() {
  const { inventory, subcategories, setSubcategories, product } =
    useContext(InventoryContext);
  const { category } = useParams();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  console.log(subcategories)
  console.log(product.name)
  return (
    <nav
      className="flex m-auto max-w-[90rem] mt-4 mb-2 lg:mx-10 lg:mt-6 lg:mb-4"
      aria-label="Breadcrumb"
    >
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              to="/browse/all"
              onClick={() => setPath([])}
              className="text-xs lg:text-sm text-gray-500 hover:text-gray-700"
            >
              Home
            </Link>
          </div>
        </li>
        {subcategories.breadcrumb &&
          subcategories.breadcrumb.map((page, index) => (
            <li key={page.id}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  to={`/browse?category=${page.id}`}
                  className={classNames(
                    product.name ? "text-gray-500 hover:text-gray-700" :
                    subcategories.breadcrumb.length - 1 == index 
                    ? "font-medium text-primary" 
                    : "text-gray-500 hover:text-gray-700",
                    "ml-4 text-xs lg:text-sm"
                    )}
                  aria-current={page.name == category ? "page" : undefined}
                >
                  {page.name}
                </Link>
              </div>
            </li>
          ))}
          {product.name && 
          <li key={product.id}>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <Link
              to={`/p/${encodeURIComponent(product.name)}?pid=${product.id}`}
              className="font-medium text-primary ml-4 text-xs lg:text-sm"
              aria-current={product.name}
            >
              {product.name}
            </Link>
          </div>
        </li>}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
