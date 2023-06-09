import { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { InventoryContext } from "../App";

// const product = {
//   name: "Women's Basic Tee",
//   price: '$32',
//   rating: 3.9,
//   reviewCount: 512,
//   href: '#',
//   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//   imageAlt: "Back of women's Basic Tee in black.",
//   colors: [
//     { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
//     { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: true },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: 'XXL', inStock: false },
//   ],
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Quickview({ open, closeModal }) {
  const { product, setProduct } = useContext(InventoryContext);
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    you an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Quickview;
