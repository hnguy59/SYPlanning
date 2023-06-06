'use client'
import { navigation } from '@/util/data'
import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const router = useRouter()
  const [isIntersecting, setIntersecting] = useState(true)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
          isIntersecting ? 'bg-zinc-900/0 border-transparent' : 'bg-zinc-900/500 border-transparent'
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
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
          </div>
          <img
            src="/images/SY-planning-no-background.png"
            alt="logo"
            className="w-24 mr-auto ml-10"
          />
          <Link href="/" className="duration-200 opacity-50 hover:opacity-100">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}
