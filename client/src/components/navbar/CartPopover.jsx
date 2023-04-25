import { Fragment, useContext, useEffect } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

function CartPopover() {
  const { cart, setCart } = useContext(UserContext);

  useEffect(() => {
    console.log("reload");
  }, [cart]);

  return (
    <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
      <Popover.Button className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
          <h2 className="sr-only">Shopping Cart</h2>

          <form className="mx-auto max-w-2xl px-4">
            <ul role="list" className="divide-y divide-gray-200">
              {cart.length > 0 &&
                cart.map((product) => (
                  <li key={product.item.id} className="flex items-center py-6">
                    <Link
                    className="flex"
                      to={`/p/${encodeURIComponent(product.item.name)}?pid=${
                        product.item.id
                      }`}
                    >
                      <img
                        src={product.item.image_id}
                        alt={product.item.name}
                        className="h-16 w-16 flex-none rounded-md border border-gray-200"
                      />
                      <div className="ml-4 flex-auto">
                        <h3 className="font-medium text-gray-900">
                          {product.item.name}
                        </h3>
                        <p className="text-gray-500">{product.quantity}</p>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>

            <button className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm text-center font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              <Link
                to="/cart"
              >
                View Shopping Bag
              </Link>
            </button>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default CartPopover;
