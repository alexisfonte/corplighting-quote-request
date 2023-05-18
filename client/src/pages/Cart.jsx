import React from 'react'
import Nav from '../components/navbar/Nav'
import CartContents from '../components/CartContents'
import CheckoutForm from '../components/CheckoutForm'

function Cart() {
  return (
    <>
    <Nav/>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

          <CartContents/>
          <CheckoutForm/>
        </div>
        </div>
        </div>
    </>
  )
}

export default Cart