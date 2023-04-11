import { Disclosure } from "@headlessui/react";
import Logo from "../Logo";
import Seachbar from "./Seachbar";
import MobileMenuButton from "./MobileMenuButton";
import ProfileModal from "./ProfileModal";
import CategoryNav from "./CategoryNav";
import Mobile from "./Mobile";
import CartPopover from "./CartPopover";
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

function Nav({ showCat }) {
  const { user } = useContext(UserContext);

  return (
    <>
      {!user && (
        <div className="bg-primary">
          <div className="hidden mx-auto lg:flex h-10 max-w-7xl items-center justify-between ">
            <p className="flex align-middle text-center text-sm font-medium text-white lg:flex-none">
              <PhoneIcon className="w-4 mx-2" />
              (504) 837-3947
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/login"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Sign in
              </Link>
              <Link
                to="/login"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      )}
      <Disclosure as="header" className="bg-white shadow w-full">
        {({ open }) => (
          <>
            <div className="mx-auto w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="relative z-10 flex items-center lg:hidden ">
                  <MobileMenuButton open={open} />
                </div>
                <Logo
                  divClass="relative z-10 flex lg:px-0 align-center"
                  linkClass="flex flex-shrink-0 items-center"
                  logoSize="text-xl lg:text-3xl"
                />
                <div className="relative z-10 lg:ml-4 flex items-center ">
                  <div className="flex">
                    <a
                      href="#"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <Link to="/cart" className="ml-4 lg:hidden">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Link>
                  <div className="hidden lg:flex">
                    <CartPopover />
                  </div>
                  {user && (
                    <div className="hidden lg:flex">
                      <span
                        className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                        aria-hidden="true"
                      />
                      <ProfileModal />
                    </div>
                  )}
                </div>
              </div>
              {(showCat && !open) && <CategoryNav />}
            </div>
            <Disclosure.Panel
              as="nav"
              className="lg:hidden"
              aria-label="Global"
            >
              <Mobile showCat={showCat}/>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Nav;
