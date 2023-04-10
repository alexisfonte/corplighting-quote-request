import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Quickview from "../components/Quickview";
import { InventoryContext } from "../App";

function InventoryGrid() {
  const [open, setOpen] = useState(false);

  const { inventory, getInventory, setProduct } = useContext(InventoryContext);
  // console.log(inventory);
  // useEffect(() => {
  //   getInventory();
  // }, []);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }
  return (
    <div className="bg-white -z-20">
      <div className="mx-auto max-w-7xl overflow-hidden ">
        {/* <Breadcrumbs/> */}
        <h2 className="sr-only">Products</h2>
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {inventory.length != 0 &&
            inventory.inventory.map((product) => (
              <>
                <div
                  key={product.id}
                  className="group relative flex flex-col-reverse justify-between border-r border-b border-gray-200 p-4 sm:p-6"
                >
                  <div className="pt-2  text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.image_id}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="flex items-end p-4">
                      <Link
                        to={`/products/${product.id}/${product.name}`}
                        className="text-center z-10 w-full items-center rounded-md bg-white bg-opacity-75 py-2 px-4 text-sm text-gray-900 opacity-0 focus:opacity-100 group-hover:opacity-100"
                      >
                        Quick View
                      </Link>
                    </div>
                    {/* <div className="flex  p-4">
                      <button
                        className="relative z-10 w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-sm text-gray-900 opacity-0 focus:opacity-100 group-hover:opacity-100"
                        onClick={openModal}
                      >
                        Quick View
                      </button>
                    </div> */}
                  </div>
                </div>
                {/* <Quickview open={open} closeModal={closeModal} /> */}
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default InventoryGrid;
