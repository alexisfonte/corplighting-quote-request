import React, { Fragment, useContext, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AppContext, UserContext } from "../App";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";



function ProfileModal() {
  const { setIsLoading } = useContext(AppContext)
  const { user, setUser, setIsLoggedIn } = useContext(UserContext)
  // console.log(user.name)
  // const profilePic = "A"
  const handleLogout = () => {
    setIsLoading(true)
    fetch("/api/logout", { method: "DELETE" }).then(() => {
      setUser(null)
      setIsLoggedIn(false)
      setIsLoading(false)
    });
  };
  return (
    <Menu as="div" className="relative ml-4 flex-shrink-0">
      <div>
        <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <span className="text-lg font-medium leading-none text-neutral">{user ? `${user.name.charAt(0).toUpperCase()}` : ""}</span>
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item key="Account">
                <Link 
                    to="/account"
                    className="bg-gray-100 block py-2 px-4 text-sm text-gray-700"
                >
                   Account
                </Link>
            </Menu.Item>
            <Menu.Item key="Quotes">
                <Link 
                    to="/quotes"
                    className="bg-gray-100 block py-2 px-4 text-sm text-gray-700"
                >
                   Quotes
                </Link>
            </Menu.Item>
            <Menu.Item 
              key="Goodbye"
              >    
              <div
              className="bg-gray-100 block py-2 px-4 text-sm text-gray-700"
              onClick={() => handleLogout()}
              >
                   Sign Out    
                </div>       
            </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ProfileModal;
