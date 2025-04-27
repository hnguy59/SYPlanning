'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home-hero">
      <div className="relative overflow-hidden mx-auto mb-5 max-w-screen-xl">
        <div className="w-full h-[calc(100vh_-_120px)] m-auto"></div>
        <div className="w-full m-auto absolute top-0 left-0 h-full">
          <div className="flex flex-col items-center justify-between h-full text-white p-12">
            <Image
              src="/images/logo/logo.jpg"
              className="rounded-full"
              alt="SY Planning Logo"
              width={400}
              height={400}
            />
            <h2 className="text-5xl font-semi-bold text-center">
              Development Application and Approval Specialist
            </h2>
            <a href="#home-contact-us" className="pt-4">
              <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                Get in touch now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
