import { Fragment, useState, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";
import InventoryList from "./InventoryList";
import Breadcrumbs from "../components/Breadcrumbs";
import Pagnation from "../components/Pagnation";
import InventoryGrid from "./InventoryGrid";
import { InventoryContext } from "../App";
import { Link } from "react-router-dom";

function CategorySidebar() {
  const { subcategories, categories, getSubcategories } =
    useContext(InventoryContext);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [gridView, setGridView] = useState(true);

  console.log(categories.length);
  console.log(filters.length);
  console.log(filters.name);
  useEffect(() => {
    if (subcategories.length == 0 || subcategories.subcategories == undefined) {
      setFilters(categories);
    } else {
      setFilters(subcategories);
    }
  }, [subcategories]);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        {/* <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  {/* <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {filters.map((category) => (
                        <>
                          <li
                            key={category.id}
                            onClick={() => getSubcategories(category.id)}
                          >
                            <Link key={`link-key-${category.id}`} to={`/browse/${category.id}`}>
                              {category.name}
                            </Link>
                          </li>
                          {category.subcategories ? (
                            <ul key={`subcategory${category.id}`}>
                              {category.subcategories.map((subcategory) => (
                                <>
                                  <li
                                    key={subcategory.id}
                                    onClick={() =>
                                      getSubcategories(subcategory.id)
                                    }
                                  >
                                    <Link
                                    key={`link-key-${subsubcategory.id}`}
                                      to={`/browse/${subparent_category_id}/${subcategory.name}`}
                                    >
                                      {subcategory.name}
                                    </Link>
                                  </li>
                                </>
                              ))}
                            </ul>
                          ) : null}
                        </>
                      ))}
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog> */}
        {/* </Transition.Root>  */}

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {(filters.length > 1 && filters.name !== 'undefined') ? "All Products" : `${filters.name}`}
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
          <Breadcrumbs />

          <section aria-labelledby="products-heading" className="pt-0 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 pt-6 text-sm font-medium text-gray-900"
                >
                  {filters.map((category) => (
                    <>
                      <li
                        key={category.id}
                        onClick={() => getSubcategories(category.id)}
                      >
                        <Link key={`link-key-${category.id}`} to={`/browse/${category.id}`}>
                          {category.name}
                        </Link>
                      </li>
                      {/* 
                        <ul key={`subcategory${category.id}`}>
                          {category.subcategories.map((subcategory) => (
                            <>
                              <li
                                key={subcategory.id}
                                onClick={() => getSubcategories(subcategory.id)}
                              >
                                <Link
                                  key={`link-key-${subcategory.id}`}
                                  to={`/browse/${subcategory.parent_category_id}/${subcategory.name}`}
                                >
                                  {subcategory.name}
                                </Link>
                              </li>
                            </>
                          ))}
                        </ul>
                      ) : null} */}
                    </>
                  ))}
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {gridView ? <InventoryGrid /> : <InventoryList />}
                <Pagnation />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default CategorySidebar;