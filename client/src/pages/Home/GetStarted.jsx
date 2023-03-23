import React from 'react'

function GetStarted() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to start?
          <br />
          Get a quote on equiptment rentals today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="/login"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get a Quote
          </a>
          <a href="/login" className="text-md font-semibold leading-6 text-gray-900">
            Browse Inventory <span aria-hidden="true" className="text-lg ">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default GetStarted