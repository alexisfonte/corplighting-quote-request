import React, { useEffect, useContext, Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { InventoryContext } from "../App";
import { Link, useLocation, useParams } from "react-router-dom";
import QuantityInput from "../components/form/QuantityInput";
import Nav from "../components/navbar/Nav";
import Breadcrumbs from "../components/ui/Breadcrumbs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const itemId = queryParams.get('pid')
  const { getProduct, getSimilarProducts, product, similarProducts } = useContext(InventoryContext);
  const [open, setOpen] = useState(false);
  console.log(similarProducts)

  useEffect(() => {
    // console.log(itemId)
    if (itemId) {
      getProduct(itemId);
      getSimilarProducts(itemId);
    }
  }, [itemId]);

  return (
    <>
    <Nav/>
    <Breadcrumbs/>
    {product && product.name && <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="aspect-h-1 aspect-w-1 w-full">
            <img
              src={product.image_id}
              alt={product.name}
              className="h-full w-full object-cover object-center sm:rounded-lg"
              />
          </div>
          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="space-y-6 text-base text-gray-700"
                >
                {product.description}
              </div>
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                <QuantityInput/>
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                  Add to bag
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {/* {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                        <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                  open ? "text-indigo-600" : "text-gray-900",
                                  "text-sm font-medium"
                                  )}
                                  >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                  <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                  />
                                  ) : (
                                      <PlusIcon
                                      className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                      />
                                      )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6"
                          >
                          <ul role="list">
                            {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                                ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))} */}
              </div>
            </section>
          </div>
        </div>

        {similarProducts.length != 0 && <section
          aria-labelledby="related-heading"
          className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0"
          >
          <h2 id="related-heading" className="text-xl font-bold text-gray-900">
            Customers also viewed
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {similarProducts.items.map((product) => (
              <div key={product.id}>
                <div className="relative">
                <Link to={`/p/${product.name}?pid=${product.id}`}>
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.image_id}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                      />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                  </div>
                      </Link>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                    Add to bag<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>}
      </div>
    </main>}
            </>
  );
}

export default ProductDetails;
