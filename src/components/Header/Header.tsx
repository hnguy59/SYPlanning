'use client'

import Image from 'next/image';
import { useState } from 'react';

import { IconBrandFacebook, IconMenu2 } from '@tabler/icons-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleClickMobileMenuButton = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <header className="sticky top-0 left-0 z-50 bg-white/90 bg-blur">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#home-hero" className="flex items-center">
            <Image
              src="/images/black-logo.png"
              className="h-10 sm:h-14"
              alt="SY Planning Logo"
              width={64}
              height={64}
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="rounded border-2 bg-transparent hover:bg-#316FF6 border-gray-700 focus:ring-4 focus:ring-primary-300 focus:outline-none"
            >
              <IconBrandFacebook strokeWidth={1.5} />
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={handleClickMobileMenuButton}
            >
              <span className="sr-only">Open main menu</span>
              <IconMenu2 />
            </button>
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              isMobileMenuOpen ? 'flex' : 'hidden'
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#home-about-us"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#home-services"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#home-faq"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#home-contact-us"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
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