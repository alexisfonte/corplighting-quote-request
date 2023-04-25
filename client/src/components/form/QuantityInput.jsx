import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

function QuantityInput({quantity, setQuantity}) {

  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <MinusIcon className="block h-4 w-4 text-gray-800" />
      </button>
      <input
        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        type="number"
        pattern="[0-9]*"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}    
      />
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <PlusIcon className="block h-4 w-4 text-gray-800" />
      </button>
    </span>
  );
}

export default QuantityInput;
