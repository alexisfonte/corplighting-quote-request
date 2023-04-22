import React, {useContext} from "react";
import { InventoryContext } from "../App";
import { Link } from "react-router-dom";




function InventoryList() {
  const {inventory} = useContext(InventoryContext)

  console.log(inventory[0])

  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <ul role="list" className="divide-y divide-gray-200">
        {inventory.length != 0 &&
            inventory.inventory.map((item) => (
          <li key={item.id} className="flex ">
            <Link to={`/p/${item.name}?pid=${item.id}`} className="flex justify-between px-6 py-4 w-full">
            <div className="flex">
            <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
              <img src={item.image_id} alt={item.name} className="flex h-16 w-16 border border-neutral bg-white text-gray-300"/>
              {/* <svg
                className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
                preserveAspectRatio="none"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 200 200"
                aria-hidden="true"
                >
                <path
                vectorEffect="non-scaling-stroke"
                strokeWidth={1}
                d="M0 0l200 200M0 200L200 0"
                />
              </svg> */}
            </div>
            <div className="mr-10 flex items-center">
              <h4 className="text-lg font-bold">{item.name}</h4>
              {/* <p className="mt-1">
                Repudiandae sint consequuntur vel. Amet ut nobis explicabo
                numquam expedita quia omnis voluptatem. Minus quidem ipsam quia
                iusto.
              </p> */}
            </div>
            </div>
            <a
              href="/"
              className=" flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 my-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
              Add to quote<span className="sr-only"></span>
            </a>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryList;
