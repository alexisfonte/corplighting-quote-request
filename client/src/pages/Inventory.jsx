import React, { useContext, useState } from "react";
import CategorySidebar from "../components/CategorySidebar";
import Nav from "../components/navbar/Nav";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { InventoryContext } from "../App";
import {
  Squares2X2Icon,
  ListBulletIcon,
  FunnelIcon,
} from "@heroicons/react/20/solid";

function Inventory() {
  const { subcategories } = useContext(InventoryContext);
  const [gridView, setGridView] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
    <Nav showCat={subcategories.path}/>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {subcategories.path && <Breadcrumbs />}
      <div className="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {subcategories.name ? subcategories.name : "All Products"}
        </h1>
        <div className="flex items-center">
          <button
            type="button"
            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            onClick={() => setGridView(!gridView)}
            >
            {gridView ? (
              <>
                <span className="sr-only">View grid</span>
                <ListBulletIcon className="h-5 w-5" aria-hidden="true" />
              </>
            ) : (
              <>
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </>
            )}
          </button>
          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
            >
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <CategorySidebar mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
    </div>
            </>
  );
}

export default Inventory;
