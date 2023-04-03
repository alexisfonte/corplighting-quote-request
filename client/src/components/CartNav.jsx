import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const products = [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
  ];
  
  const navigation = {
    categories: [
      {
        name: "Lighting",
        featured: [
          { name: "Sleep", href: "#" },
          { name: "Swimwear", href: "#" },
          { name: "Underwear", href: "#" },
        ],
        collection: [
          { name: "Everything", href: "#" },
          { name: "Core", href: "#" },
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
        ],
        categories: [
          { name: "Basic Tees", href: "#" },
          { name: "Artwork Tees", href: "#" },
          { name: "Bottoms", href: "#" },
          { name: "Underwear", href: "#" },
          { name: "Accessories", href: "#" },
        ],
        brands: [
          { name: "Full Nelson", href: "#" },
          { name: "My Way", href: "#" },
          { name: "Re-Arranged", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Significant Other", href: "#" },
        ],
      },
      {
        name: "Audio",
        featured: [
          { name: "Sleep", href: "#" },
          { name: "Swimwear", href: "#" },
          { name: "Underwear", href: "#" },
        ],
        collection: [
          { name: "Everything", href: "#" },
          { name: "Core", href: "#" },
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
        ],
        categories: [
          { name: "Basic Tees", href: "#" },
          { name: "Artwork Tees", href: "#" },
          { name: "Bottoms", href: "#" },
          { name: "Underwear", href: "#" },
          { name: "Accessories", href: "#" },
        ],
        brands: [
          { name: "Full Nelson", href: "#" },
          { name: "My Way", href: "#" },
          { name: "Re-Arranged", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Significant Other", href: "#" },
        ],
      },
      {
        name: "Video",
        featured: [
          { name: "Sleep", href: "#" },
          { name: "Swimwear", href: "#" },
          { name: "Underwear", href: "#" },
        ],
        collection: [
          { name: "Everything", href: "#" },
          { name: "Core", href: "#" },
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
        ],
        categories: [
          { name: "Basic Tees", href: "#" },
          { name: "Artwork Tees", href: "#" },
          { name: "Bottoms", href: "#" },
          { name: "Underwear", href: "#" },
          { name: "Accessories", href: "#" },
        ],
        brands: [
          { name: "Full Nelson", href: "#" },
          { name: "My Way", href: "#" },
          { name: "Re-Arranged", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Significant Other", href: "#" },
        ],
      },
      {
        name: "LED",
        featured: [
          { name: "Casual", href: "#" },
          { name: "Boxers", href: "#" },
          { name: "Outdoor", href: "#" },
        ],
        collection: [
          { name: "Everything", href: "#" },
          { name: "Core", href: "#" },
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
        ],
        categories: [
          { name: "Artwork Tees", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Accessories", href: "#" },
          { name: "Boxers", href: "#" },
          { name: "Basic Tees", href: "#" },
        ],
        brands: [
          { name: "Significant Other", href: "#" },
          { name: "My Way", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Re-Arranged", href: "#" },
          { name: "Full Nelson", href: "#" },
        ],
      },
    ],
    pages: [],
  };
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

function CartNav() {
    const [open, setOpen] = useState(false);
    return (
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
  
                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-900",
                                "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category, categoryIdx) => (
                        <Tab.Panel
                          key={category.name}
                          className="space-y-12 px-4 pt-10 pb-6"
                        >
                          <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                              <div>
                                <p
                                  id={`mobile-featured-heading-${categoryIdx}`}
                                  className="font-medium text-gray-900"
                                >
                                  Featured
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                                  className="mt-6 space-y-6"
                                >
                                  {category.featured.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p
                                  id="mobile-categories-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Categories
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="mobile-categories-heading"
                                  className="mt-6 space-y-6"
                                >
                                  {category.categories.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                              <div>
                                <p
                                  id="mobile-collection-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Collection
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="mobile-collection-heading"
                                  className="mt-6 space-y-6"
                                >
                                  {category.collection.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
  
                              <div>
                                <p
                                  id="mobile-brand-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Brands
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="mobile-brand-heading"
                                  className="mt-6 space-y-6"
                                >
                                  {category.brands.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
  
                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <a
                          href={page.href}
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          {page.name}
                        </a>
                      </div>
                    ))}
                  </div>
  
                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create an account
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Sign in
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
  
        <header className="relative">
          <nav aria-label="Top">
            {/* Secondary navigation */}
            <div className="bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex flex-1">
                      <div className="hidden h-full lg:flex">
                        {/* Logo (lg+) */}
                        <div className="hidden lg:flex lg:items-center">
                          <a href="#" className="-m-1.5 p-1.5">
                            <span className="text-2xl font-bold leading-6 text-indigo-600">
                              CorpLighting
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                      <div>
                        {/* Mega menus */}
                        <Popover.Group className="ml-8 z-60">
                          <div className="flex h-full justify-center space-x-8">
                            {navigation.categories.map(
                              (category, categoryIdx) => (
                                <Popover key={category.name} className="flex">
                                  {({ open }) => (
                                    <>
                                      <div className="relative flex">
                                        <Popover.Button
                                          className={classNames(
                                            open
                                              ? "border-indigo-600 text-indigo-600"
                                              : "border-transparent text-gray-700 hover:text-gray-800",
                                            "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                          )}
                                        >
                                          {category.name}
                                        </Popover.Button>
                                      </div>
  
                                      <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                      >
                                        <Popover.Panel className="absolute z-50 inset-x-0 top-full text-gray-500 sm:text-sm">
                                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                          <div
                                            className="absolute inset-0 top-1/2 bg-white shadow"
                                            aria-hidden="true"
                                          />
  
                                          <div className="relative bg-white">
                                            <div className="mx-auto max-w-7xl px-8">
                                              <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                  <div>
                                                    <p
                                                      id={`desktop-featured-heading-${categoryIdx}`}
                                                      className="font-medium text-gray-900"
                                                    >
                                                      Featured
                                                    </p>
                                                    <ul
                                                      role="list"
                                                      aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                      {category.featured.map(
                                                        (item) => (
                                                          <li
                                                            key={item.name}
                                                            className="flex"
                                                          >
                                                            <a
                                                              href={item.href}
                                                              className="hover:text-gray-800"
                                                            >
                                                              {item.name}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                  <div>
                                                    <p
                                                      id="desktop-categories-heading"
                                                      className="font-medium text-gray-900"
                                                    >
                                                      Categories
                                                    </p>
                                                    <ul
                                                      role="list"
                                                      aria-labelledby="desktop-categories-heading"
                                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                      {category.categories.map(
                                                        (item) => (
                                                          <li
                                                            key={item.name}
                                                            className="flex"
                                                          >
                                                            <a
                                                              href={item.href}
                                                              className="hover:text-gray-800"
                                                            >
                                                              {item.name}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                  <div>
                                                    <p
                                                      id="desktop-collection-heading"
                                                      className="font-medium text-gray-900"
                                                    >
                                                      Collection
                                                    </p>
                                                    <ul
                                                      role="list"
                                                      aria-labelledby="desktop-collection-heading"
                                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                      {category.collection.map(
                                                        (item) => (
                                                          <li
                                                            key={item.name}
                                                            className="flex"
                                                          >
                                                            <a
                                                              href={item.href}
                                                              className="hover:text-gray-800"
                                                            >
                                                              {item.name}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
  
                                                  <div>
                                                    <p
                                                      id="desktop-brand-heading"
                                                      className="font-medium text-gray-900"
                                                    >
                                                      Brands
                                                    </p>
                                                    <ul
                                                      role="list"
                                                      aria-labelledby="desktop-brand-heading"
                                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                      {category.brands.map(
                                                        (item) => (
                                                          <li
                                                            key={item.name}
                                                            className="flex"
                                                          >
                                                            <a
                                                              href={item.href}
                                                              className="hover:text-gray-800"
                                                            >
                                                              {item.name}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Popover.Panel>
                                      </Transition>
                                    </>
                                  )}
                                </Popover>
                              )
                            )}
  
                            {navigation.pages.map((page) => (
                              <a
                                key={page.name}
                                href={page.href}
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                              >
                                {page.name}
                              </a>
                            ))}
                          </div>
                        </Popover.Group>
                      </div>
  
                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>
  
                      {/* Search */}
                      <a
                        href="#"
                        className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
  
                    {/* Logo (lg+) */}
                    <div className="lg:hidden">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="text-2xl font-bold leading-6 text-indigo-600">
                          CorpLighting
                        </span>
                      </a>
                    </div>
                    <div className="flex flex-1 items-center justify-end">
                      <div className="flex items-center lg:ml-8">
                        <div className="flex space-x-8">
                          <div className="hidden lg:flex">
                            <a
                              href="#"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Search</span>
                              <MagnifyingGlassIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
  
                          <div className="flex">
                            <a
                              href="#"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Account</span>
                              <UserIcon className="h-6 w-6" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
  
                        <span
                          className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                          aria-hidden="true"
                        />
  
                        <div className="flow-root">
                            <div className="group -m-2 flex items-center">
                              <ShoppingCartIcon
                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                0
                              </span>
                              <span className="sr-only">
                                items in cart, view bag
                              </span>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
}

export default CartNav