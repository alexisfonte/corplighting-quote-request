import { Fragment, useState, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";
import InventoryList from "./InventoryList";
import Breadcrumbs from "./ui/Breadcrumbs";
import Pagnation from "./ui/Pagnation";
import InventoryGrid from "./InventoryGrid";
import { AppContext, InventoryContext } from "../App";
import { Link, useParams, useLocation } from "react-router-dom";

function CategorySidebar({ mobileFiltersOpen, setMobileFiltersOpen}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const page = queryParams.get('page') || 1;
  // console.log(page)

  const params = useParams();
  // console.log(params)

  const { setIsLoading } = useContext(AppContext);
  const { subcategories, categories, getSubcategories, filter, getInventory } =
    useContext(InventoryContext);

  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [gridView, setGridView] = useState(true);

  useEffect(() => {
    // console.log(category)
    if (category) {
      // console.log(category)
      setIsLoading(true);
      if (subcategories.id != category) {
        getSubcategories(category, page);
      }
      setFilters(subcategories);
      setIsLoading(false);
    } else {
      // console.log(categories)
      setFilters(categories);
      getInventory(page);
    }
  }, [category, categories, subcategories, page]);

  const singleList = () => {
      return filters.map((category) => (
          <li key={category.id}>
            <Link
              key={`link-key-${category.id}`}
              to={`?category=${category.id}`}
            >
              {category.name}
            </Link>
          </li>
      ));
  };

  const nestedList = () => {
    if (filters.id == category) {
      return (
        <>
          <li key={filters.id}>
            <Link key={`link-key-${filters.id}`} to={`?category=${filters.id}`}>
              {filters.name}
            </Link>
          </li>
          <ul key='subcategories'>
            {filters.subcategories.map((category) => (
              <li key={category.id}>
                <Link
                  key={category.id}
                  to={`?category=${category.id}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      );
    } else {
      <li key={filters.id}>
        <Link key={`link-key-${filters.id}`} to={`?category=${filters.id}`} >
          {filters.name}
        </Link>
      </li>;
    }
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
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
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {category ? nestedList() : singleList()}
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

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
              {category ? nestedList() : singleList()}
            </ul>
          </form>

          {/* Product grid */}
          <div className="lg:col-span-3">
            {gridView ? <InventoryGrid /> : <InventoryList />}
            <Pagnation category={category}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategorySidebar;
