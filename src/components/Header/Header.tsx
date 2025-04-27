'use client'

import Image from 'next/image'
import { useState } from 'react'

import { IconMenu2 } from '@tabler/icons-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleClickMobileMenuButton = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <header className="sticky top-0 left-0 z-50 bg-white/90 bg-blur">
      <nav className="border-neutral-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap items-center mx-auto max-w-screen-xl">
          <a href="#home-hero" className="flex items-center">
            <Image
              src="/images/logo/logo-long.png"
              className="h-10 sm:h-14 object-cover w-fit object-left"
              alt="SY Planning Logo"
              width={462}
              height={118}
            />
          </a>
          <div className="flex flex-grow"></div>
          <div className="flex items-center flex-end lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-neutral-500 rounded-lg lg:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={handleClickMobileMenuButton}
            >
              <span className="sr-only">Open main menu</span>
              <IconMenu2 />
            </button>
          </div>
          <div
            className={`justify-between bg-white/90 lg:bg-transparent flex-end items-center left-0 w-full absolute lg:relative top-[60px] sm:top-[76px] lg:top-0 lg:flex lg:w-auto lg:order-1 ${
              isMobileMenuOpen ? 'flex' : 'hidden'
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium w-full lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#home-testimonials"
                  className="block py-2 pr-4 text-center pl-3 text-neutral-700 border-b border-neutral-100 hover:bg-neutral-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#home-about-us"
                  className="block py-2 pr-4 text-center pl-3 text-neutral-700 border-b border-neutral-100 hover:bg-neutral-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#home-services"
                  className="block py-2 pr-4 text-center pl-3 text-neutral-700 border-b border-neutral-100 hover:bg-neutral-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#home-faq"
                  className="block py-2 pr-4 text-center pl-3 text-neutral-700 border-b border-neutral-100 hover:bg-neutral-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#home-contact-us"
                  className="block py-2 pr-4 text-center pl-3 text-neutral-700 border-b border-neutral-100 hover:bg-neutral-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
