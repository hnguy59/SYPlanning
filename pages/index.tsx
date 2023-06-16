import Link from 'next/link'
import React from 'react'
import Particles from '../components/Particles'
import { navigation } from '@/util/data'
import { Theme } from '@/components/Theme'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-screen overflow-hidden bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black from-white via-zinc-600/20 to-white">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-semibold duration-500 opacity-50 hover:opacity-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 text-6xl pb-2 sm:pb-4 text-transparent duration-1000 bg-black dark:bg-white cursor-default text-edge-outline animate-title font-display sm:text-8xl md:text-9xl whitespace-nowrap bg-clip-text ">
        SY Planning
      </h1>
      <div className="opacity-40 dark:opacity-30 -z-50 absolute min-w-full">
        <Image
          src="/images/maps.jpg"
          alt="building plans"
          width={4006}
          height={2485}
          className="h-screen min-w-full object-cover"
        />
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-left animate-fade-in flex flex-col items-start justify-center gap-10 px-2">
        <h2 className="text-med opacity-80 dark:opacity-50 text-center max-w-md">
          We are <b className="text-">Urban Planning Professionals</b> that aspire to create better
          places for people to <b>live, work & play</b>. Specialising in preparing & submitting
          Development Applications in{' '}
          <u>
            <b>Queensland & New South Wales.</b>
          </u>
        </h2>
        <Link href="/about" className="flex items-center justify-center w-fit m-auto">
          <button className="relative rounded-full px-3 py-1 text-sm leading-6 opacity-50 ring-1 ring-black/50 hover:ring-black/100 dark:ring-white/50 dark:hover:ring-white/100">
            Get started
          </button>
        </Link>
        <div className="flex w-full items-center justify-center">
          <Theme />
        </div>
      </div>
    </div>
  )
}
