import Image from 'next/image'

import { Button } from '@chakra-ui/react'

export default function Hero() {
  return (
    <section id="home-hero">
      <div className="relative overflow-hidden mx-auto mb-5 max-w-screen-xl">
        <div className="w-full h-[calc(100vh_-_120px)] m-auto"></div>
        <div className="w-full m-auto absolute top-0 left-0 h-full">
          <div className="flex flex-col items-center justify-between h-full text-white p-12">
            <Image
              src="/images/black-logo.png"
              className=""
              alt="SY Planning Logo"
              width={400}
              height={400}
            />
            <h2 className="text-5xl font-semi-bold">NSW Development Assessment Specialist</h2>
            <Button className="w-fit rounded-3xl bg-white">Get in touch now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
