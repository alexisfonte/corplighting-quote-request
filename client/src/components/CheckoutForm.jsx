import React, { useState } from "react";
import Datepicker from "./form/Datepicker";

function CheckoutForm() {
    const [progress, setProgress] = useState([
      { step: 1, submitted: false, current: true },
      { step: 2, submitted: false, current: false },
      { step: 3, submitted: false, current: false },
    ]);
// quote information
  const [prepDate, setPrepDate] = useState([]);
  const [returnDate, setReturnDate] = useState([]);

  // client information 
  const [company, setCompany] = useState([]);
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);

  // venue information 
  const [venue, setVenue] = useState([]);
  const [venueName, setVenueName] = useState([]);
  const [venueLocation, setVenueLocation] = useState([]);
  const [venueContactNumber, setVenueContactNumber] = useState([]);

  const handleQuoteSubmit = () => {
    
  }

  const handleClientSubmit = () => {

  }

  const handleVenueSubmit = () => {

  }

  return (
    <div className="mx-auto w-full max-w-lg">
      {progress[0].current && !progress[0].submitted ? (
        <form className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">
            Client information
          </h2>
          <section aria-labelledby="company-address-heading" className="mt-5">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="apartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apartment, suite, etc.
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="region"
                    name="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </section>
          <button
            type="submit"
            className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>
      ) : (
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          <button
            type="button"
            disabled
            className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
          >
            Client Information
          </button>
        </div>
      )}

      {progress[1].current && !progress[1].submitted ? (
        <form className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Rental Info</h2>
          <section aria-labelledby="company-address-heading" className="mt-5">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rental Dates
                </label>
                <div className="mt-1">
                  <Datepicker />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Notes
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </section>
          <button
            type="submit"
            className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>
      ) : (
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          <button
            type="button"
            disabled
            className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
          >
            Quote Info
          </button>
        </div>
      )}

      {progress[2].current && !progress[2].submitted ? (
        <form className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">
            Venue information
          </h2>
          <section aria-labelledby="company-address-heading" className="mt-5">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="apartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apartment, suite, etc.
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="region"
                    name="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </section>
          <button
            type="submit"
            className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>
      ) : (
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          <button
            type="button"
            disabled
            className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
          >
            Venue Details
          </button>
        </div>
      )}
      <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
        <button
          type="button"
          disabled
          className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
        >
          Review
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
