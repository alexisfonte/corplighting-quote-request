import { Disclosure } from "@headlessui/react";
import Logo from "../Logo";
import Seachbar from "./Seachbar";
import MobileMenuButton from "./MobileMenuButton";
import ProfileModal from "./ProfileModal";
import CategoryNav from "./CategoryNav";
import Mobile from "./Mobile";
import CartPopover from "./CartPopover";
import { MagnifyingGlassIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { UserContext } from "../../App";

function Nav() {
  const { user } = useContext(UserContext);
  return (
    <>
      {!user && (
        <div className="bg-primary">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between ">
            <p className="flex align-middle text-center text-sm font-medium text-white lg:flex-none">
              <PhoneIcon className="w-4 mx-2" />
              (504) 837-3947
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Sign in
              </a>
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      )}

      <Disclosure as="header" className="bg-white shadow w-full">
        {({ open }) => (
          <>
            <div className="mx-auto w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <Logo
                  divClass="relative z-10 flex px-2 lg:px-0"
                  linkClass="flex flex-shrink-0 items-center"
                />
                {/* <Seachbar /> */}
                {/* <CategoryNav /> */}
                <div className="relative z-10 flex items-center lg:hidden ">
                  <MobileMenuButton open={open} />
                </div>
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                  <div className="hidden lg:flex">
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
                  <CartPopover />
                  <span
                    className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                    aria-hidden="true"
                  />
                  {user && <ProfileModal />}
                </div>
              </div>
              <CategoryNav />
            </div>
            <Disclosure.Panel
              as="nav"
              className="lg:hidden"
              aria-label="Global"
            >
              <Mobile />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Nav;
