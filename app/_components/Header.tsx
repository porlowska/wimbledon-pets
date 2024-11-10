"use client";
import { useState } from "react";
//components
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
//icons
import { MdPets, MdClose } from "react-icons/md";
import { GiDogHouse, GiJumpingDog } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";
import { FaHouseChimneyUser, FaBars, FaChevronDown } from "react-icons/fa6";

const services = [
  {
    name: "All Services",
    description: "All services we provide at Wimbledon Pets",
    href: "/services",
    icon: SiDatadog,
  },
  {
    name: "Dog Training",
    description: "Professional positive reinforcemnt training.",
    href: "/services/dog-training",
    icon: GiJumpingDog,
  },
  {
    name: "Dog Walking",
    description: "Daily or occasional dog walking services.",
    href: "/services/dog-walking",
    icon: MdPets,
  },
  {
    name: "Pet & House Sitting",
    description: "Reliable pet and house sitting while you’re away.",
    href: "/services/house-sitting",
    icon: FaHouseChimneyUser,
  },
  {
    name: "Dog Boarding",
    description: "Safe, comfortable in house boarding for your dog.",
    href: "/services/dog-boarding",
    icon: GiDogHouse,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  const openMenu = () => {
    setMobileMenuOpen(true);
  };

  return (
    <header className="w-full bg-whiteish">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        {/** Company logo  */}
        <div className="flex lg:flex-1">
          <Logo className="text-gray-900" w={80} h={40} />
        </div>

        {/** Mobile dropdown menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={openMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/**Desktop Navbar */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-md/6 font-semibold text-gray-900 hover:text-secondary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-md/6 font-semibold text-gray-900 hover:text-secondary"
          >
            About Us
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-gray-900 hover:text-secondary">
              Services
              <FaChevronDown
                aria-hidden="true"
                className="ml-1 h-3 w-3 flex-none text-primary"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6 hover:bg-gray-100"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-primary group-hover:text-secondary"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600 text-md/6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link
            href="/terms"
            className="text-md/6 font-semibold text-gray-900  hover:text-secondary"
          >
            Terms
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            href={"/book-now"}
            isLink={true}
            text="Book Now"
            variant={2}
            className="px-8"
          />
        </div>
      </nav>

      {/** Mobile hamburger menu */}
      <Dialog open={mobileMenuOpen} onClose={closeMenu} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={closeMenu}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <MdClose aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          {/** Menu items */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50  hover:text-secondary"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 "
                  onClick={closeMenu}
                >
                  About Us
                </Link>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <FaChevronDown
                      aria-hidden="true"
                      className="h-3 w-3 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href="/terms"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 "
                  onClick={closeMenu}
                >
                  Terms
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/book-now"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-md font-semibold text-whiteish bg-secondary"
                  onClick={closeMenu}
                >
                  Book Now!
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
