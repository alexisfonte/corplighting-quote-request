import { Disclosure } from "@headlessui/react";
import Logo from "../components/Logo";
import Seachbar from "../components/Seachbar";
import MobileMenuButton from "../components/MobileMenuButton";
import ProfileModal from "../components/ProfileModal";
import CategoryNav from "./CategoryNav";
import Mobile from "./Mobile";

function Nav() {

  return (
    <Disclosure as="header" className="bg-white shadow w-full">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <Logo
                divClass="relative z-10 flex px-2 lg:px-0"
                linkClass="flex flex-shrink-0 items-center"
              />
              <Seachbar />
              <div className="relative z-10 flex items-center lg:hidden ">
                <MobileMenuButton open={open} />
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <ProfileModal />
              </div>
            </div>
            <CategoryNav />
          </div>
          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
           <Mobile/>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
