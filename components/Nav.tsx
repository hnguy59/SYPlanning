'use client'
import { navigation } from '@/util/data'
import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Theme } from './Theme'

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const router = useRouter()
  const { theme, resolvedTheme } = useTheme()
  const [isIntersecting, setIntersecting] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header ref={ref}>
      <div
        className={clsx(
          `fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b`,
          isIntersecting ? 'bg-zinc-900/0 border-transparent' : 'bg-zinc-900/500 border-transparent'
        )}
      >
        <div className="container flex flex-row-reverse items-center justify-between px-6 mx-auto relative">
          {/* Mobile */}
          <div className="flex md:hidden">
            <Theme />
            <button
              onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
              className="inline-flex items-center z-50 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={clsx(
                'absolute w-screen top-0 left-0 md:block md:w-auto z-40 backdrop-blur p-10 duration-200 bg-white rounded',
                isMobileMenuOpen ? 'flex' : 'hidden'
              )}
            >
              <div className="flex flex-col gap-8 items-center w-full">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'text-sm duration-200  px-3 py-1 opacity-50 hover:opacity-100',
                      router.pathname === item.href &&
                        'rounded-full leading-6 ring-1 ring-black/50 hover:ring-black/100 dark:ring-white/50 dark:hover:ring-white/100'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="flex justify-between gap-8 items-center ">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'text-sm duration-200  px-3 py-1 opacity-50 hover:opacity-100',
                    router.pathname === item.href &&
                      'relative rounded-full leading-6 ring-1 ring-black/50 hover:ring-black/100 dark:ring-white/50 dark:hover:ring-white/100'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Theme />
            </div>
          </div>
          <Link href="/" className="container flex justify-start w-fit z-50">
            <img
              src={
                theme === 'dark' || resolvedTheme === 'dark'
                  ? '/images/black-logo.png'
                  : '/images/white-logo.png'
              }
              alt="logo"
              className="w-32"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
