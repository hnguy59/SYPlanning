'use client'

import Script from 'next/script'

import { Divider } from '@chakra-ui/react'

export default function Testimonials() {
  return (
    <section id="home-testimonials" className="bg-white">
      <div className="py-8 mx-auto sm:py-16 max-w-screen-xl px-4 lg:px-6 gap-8 flex flex-col">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-700">Reviews</h2>
        <div>
          <div className="sk-ww-google-reviews" data-embed-id={25383119} />
          <Script
            src="https://widgets.sociablekit.com/google-reviews/widget.js"
            async
            defer
          ></Script>
        </div>
      </div>
      <Divider />
    </section>
  )
}
