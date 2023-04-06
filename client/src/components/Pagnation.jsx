import React, { useContext, useEffect, useState } from 'react'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { InventoryContext } from '../App'
import { Link, useParams } from 'react-router-dom'

function Pagnation() {
  const { inventory, getInventory } = useContext(InventoryContext);
  const [currentPage, setCurrentPage] = useState(1)
  const { category, page } = useParams();
  console.log(inventory.pages)

    useEffect(() => {
      setCurrentPage(inventory.page)
  }, [page]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function handlePagination(e){
    const pg = parseInt(e.target.text)
    setCurrentPage(pg)
  }

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <Link to={`/browse/${category}/${(currentPage != 1) ? `${(currentPage - 1)}` : '#'}`}
        onClick={() => setCurrentPage(currentPage --)}
        className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </Link>
        
      </div>
        
      <div className="hidden md:-mt-px md:flex">
      <Link to={`/browse/${category}/${(currentPage > 3) ? (currentPage - 1) : 1}`}
        onClick={(e) => handlePagination(e)}
        className={classNames(
          ((currentPage > 3) ? (currentPage - 1) : 1) == currentPage ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        )}
        >
          {(currentPage > 3) ? (currentPage - 1) : 1}
        </Link>
        {inventory.pages > 6 &&
        <>
          <Link to={`${(currentPage > 3) ? currentPage : 2}`} 
          onClick={(e) => handlePagination(e)}
        className={classNames(
          ((currentPage > 3) ? currentPage : 2) == currentPage ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        )}
        >
          {(currentPage > 3) ? currentPage : 2}
        </Link>
        <Link to={`${(currentPage > 3) ? (currentPage + 1) : 3}`}
        onClick={(e) => handlePagination(e)}
        className={classNames(
          ((currentPage > 3) ? (currentPage + 1) : 3) == currentPage ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        )}
        >
          {(currentPage > 3) ? (currentPage + 1) : 3}
        </Link>
          </>
        }
        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
          ...
        </span>
        {
          inventory.pages > 6 &&
          <>
        <Link to={`${inventory.pages - 2}`}
        onClick={(e) => handlePagination(e)}
        className={classNames(
          (inventory.pages - 2) == currentPage ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        )}
        >
          {inventory.pages - 2}
        </Link>
        <Link to={`${inventory.pages - 1}`}
        onClick={(e) => handlePagination(e)}
        className={classNames(
          (inventory.pages - 1) == currentPage ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        )}
        >
          {inventory.pages - 1}
        </Link>
        </>}
        <Link to={`${inventory.pages}`}
        onClick={(e) => handlePagination(e)}
        className={classNames(
          inventory.pages == currentPage ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
        )}
        >
          {inventory.pages}
        </Link>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
      <Link to={(currentPage != inventory.pages) ? `${(currentPage + 1)}` : '#'}
      onClick={() => setCurrentPage(currentPage ++)}
        className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  )
}

export default Pagnation