import { Fragment, useContext, useState } from "react";
import Datepicker from "./form/Datepicker";
import { UserContext } from "../App";
import QuantityInput from "./form/QuantityInput";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CartContents() {
  const {cart, setCart, handleUpdateCart, handleRemoveFromCart} = useContext(UserContext);
  const [quantity, setQuantity] = useState(1)
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleEditClick = (id) => {
    const newCartItems = cart.map((item) => {
      if (item.item.id == id){
        return {...item, editing: true}
      }else {
        return item
      }
    })
    setCart(newCartItems)
  };

  const handleSaveClick = (id) => {
    const newCartItems = cart.map((item) => {
      if (item.item.id == id) {
        return {...item, editing: false, quantity: quantity}
      }else {
        return item
      }
    })
    setCart(newCartItems);
    handleUpdateCart(id, quantity);
  }

  return (
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.map((product) => (
                  <li key={product.item.id} className="flex space-x-6 py-6">
                    <img
                      src={product.item.image_id}
                      alt={product.item.name}
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">
                            <a href={product.href}>{product.item.name}</a>
                          </h3>
                          <p className="text-gray-900">Qty: {product.quantity}</p>
                          <p className="hidden text-gray-500 sm:block">
                            Qty: {product.quantity}
                          </p>
                          <div className={product.editing ? '' : 'hidden'}>
                          <QuantityInput quantity={quantity} setQuantity={setQuantity}/>
                          </div>
                        </div>
                        <div className="flex flex-none space-x-4">
                          <button
                            type="button"
                            onClick={() => handleEditClick(product.item.id)}
                            className={product.editing ? "hidden" : "text-sm font-medium text-indigo-600 hover:text-indigo-500"}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSaveClick(product.item.id)}
                            className={product.editing ? "text-sm font-medium text-indigo-600 hover:text-indigo-500" : "hidden"}
                          >
                            Save
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button
                              type="button"
                              onClick={() => handleRemoveFromCart(product.item.id)}
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
  );
}

export default CartContents;
