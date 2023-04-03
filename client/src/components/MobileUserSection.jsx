import React, { useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const userNavigation = [
    { name: 'Your Account', href: '/profile' },
    { name: 'Settings', href: '/edit-profile' },
    { name: 'Sign out', href: '#' },
  ]
function MobileUserSection() {
  const { user } = useContext(UserContext)
  const handleLogout = () => {
    fetch("/api/logout", { method: "DELETE" }).then(() => {
      setUser(null)
      
    });
  };

  return (
    <div className="border-t border-gray-200 pt-4 pb-3">
    <div className="flex items-center px-4">
      <div className="flex-shrink-0">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <span className="text-lg font-medium leading-none text-neutral">{user ? `${user.name.charAt(0).toUpperCase()}` : ""}</span>
          </span>
      </div>
      <div className="ml-3">
        <div className="text-base font-medium text-gray-800">
          {user.name}
        </div>
        <div className="text-sm font-medium text-gray-500">
          {user.email}
        </div>
      </div>
    </div>
    <div className="mt-3 space-y-1 px-2">
      <Disclosure.Button key="Account" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">
        <Link to="/account">
        Account
        </Link>
      </Disclosure.Button>
      <Disclosure.Button key="Quotes">
        <Link to="/quotes" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">
        Quotes
        </Link>
      </Disclosure.Button>
      <Disclosure.Button key="Goodbye" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">
        <div
        onClick={() => handleLogout()}
        >
        Sign Out 
        </div>
      </Disclosure.Button>
      
  
    </div>
  </div>
  )
}

export default MobileUserSection