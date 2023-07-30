import { Sections, navLinks } from './Layout.helpers'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'
import Logo from '../../../public/images/white-logo.png'

const Header = () => {
  const [activeLink, setActiveLink] = useState<Sections>(Sections.ABOUT)
  const [scrollActive, setScrollActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])

  return (
    <>
      <header
        className={
          'fixed top-0 w-full z-30 bg-white-500 transition-all ' +
          (scrollActive ? ' shadow-md pt-0' : ' pt-4')
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image src={Logo} alt="SY Planning Logo" className="w-auto h-32" />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center justify-end">
            {navLinks.map(({ title, section }) => {
              return (
                <li key={title}>
                  <LinkScroll
                    activeClass="active"
                    to={section}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink(section)
                    }}
                    className={
                      'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                      (activeLink === section
                        ? ' text-orange-500 animation-active '
                        : ' text-black-500 hover:text-orange-500 a')
                    }
                  >
                    {title}
                  </LinkScroll>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {navLinks.map(({ title, section, icon }) => {
              return (
                <li key={title}>
                  <LinkScroll
                    activeClass="active"
                    to={section}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink(section)
                    }}
                    className={
                      'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                      (activeLink === section
                        ? '  border-orange-500 text-orange-500'
                        : ' border-transparent')
                    }
                  >
                    {icon ?? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {title}
                  </LinkScroll>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  )
}

export default Header
