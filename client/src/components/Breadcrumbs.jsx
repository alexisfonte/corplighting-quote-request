import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/20/solid'
import { InventoryContext } from '../App'

// const pages = [
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Project Nero', href: '#', current: true },
// ]
function Breadcrumbs() {
  const { inventory, subcategories } = useContext(InventoryContext)
  const { category } = useParams()
  // console.log(subcategories.path.split(">"))
  if (subcategories.path){
    console.log(subcategories.path.split("Audio Tools")[0])
    console.log([subcategories.path.split("Audio Tools")[0], "Audio Tools"].join(""))
  }
  return (
    <nav className="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
    <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
      <li className="flex">
        <div className="flex items-center">
          <Link
          to="/browse/inventory"
          className="text-gray-400 hover:text-gray-500">
            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
          {/* <svg
              className="h-full w-6 flex-shrink-0 text-gray-200"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg> */}
        </div>
      </li>
      {subcategories.path && subcategories.path.split(" > ").map((page) => (
        <li key={page} className='flex'>
          <div className="flex items-center">
            <svg
            className="h-full w-6 flex-shrink-0 text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
            <Link
            to={`/browse/${[subcategories.path.split(page)[0], page].join("")}`}
            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            aria-current={page == category ? 'page' : undefined}
            >
          {page}
            </Link>
          </div>
          </li>
      ))}
      {/* {subcategories.map((page) => (
        <li key={page.name} className="flex">
          <div className="flex items-center">
            <Link
            to={`/browse/{page.name}`}
            >
            </Link>
          <a
          href={page.href}
          className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          aria-current={page.current ? 'page' : undefined}
          >
          {page.name}
          </a>
          <svg
            className="h-full w-6 flex-shrink-0 text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          </div>
        </li>
      ))} */}
    </ol>
  </nav>
  )
}

export default Breadcrumbs