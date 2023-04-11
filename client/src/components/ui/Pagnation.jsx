import React, { useContext, useEffect, useState } from 'react'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { InventoryContext } from '../../App'
import { Link, useParams } from 'react-router-dom'

function Pagnation() {
  const { inventory, getInventory } = useContext(InventoryContext);
  const [currentPage, setCurrentPage] = useState(1)
  const { category, page } = useParams();
  // console.log(inventory.pages)

    useEffect(() => {
      setCurrentPage(inventory.page)
  }, [page]);

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing page <span className="font-medium">{inventory.page}</span> of <span className="font-medium">{inventory.pages}</span>
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <Link to={`/browse/${category}/${(currentPage != 1) ? `${(currentPage - 1)}` : '#'}`}
        onClick={() => setCurrentPage(currentPage --)}
        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </Link>
        <Link
        to={(currentPage != inventory.pages) ? `${(currentPage + 1)}` : '#'}
        onClick={() => setCurrentPage(currentPage ++)}
        className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
           Next <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  )
}

export default Pagnation