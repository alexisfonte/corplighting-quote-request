import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { InventoryContext } from "../../App";

function Breadcrumbs() {
  const { inventory, subcategories, setSubcategories } =
    useContext(InventoryContext);
  const { category } = useParams();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

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
              onClick={() => setSubcategories([])}
              className="text-xs lg:text-sm text-gray-500 hover:text-gray-700"
            >
              Home
            </Link>
          </div>
        </li>
        {subcategories.path &&
          subcategories.path.split(" > ").map((page, index) => (
            <li key={page}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  to={`/browse/${[subcategories.path.split(page)[0], page].join(
                    ""
                  )}`}
                  className={classNames(
                    subcategories.path.split(" > ").length - 1 == index 
                    ? "font-medium text-primary" 
                    : "text-gray-500 hover:text-gray-700",
                    "ml-4 text-xs lg:text-sm"
                    )}
                  aria-current={page == category ? "page" : undefined}
                >
                  {page}
                </Link>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
