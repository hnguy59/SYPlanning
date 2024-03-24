import Image from 'next/image'

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 border-t">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-neutral-900"
        >
          <Image
            src="/images/white-logo.png"
            className=""
            alt="SY Planning Logo"
            width={64}
            height={64}
          />
        </a>
        <div className="my-6 text-neutral-500 flex flex-row gap-4 items-center justify-center">
          <IconBrandFacebook />
          <IconBrandInstagram />
          <IconBrandLinkedin />
          <IconMail />
          <IconPhone />
        </div>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-neutral-900">
          <li>
            <a href="#home-hero" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#home-testimonials" className="mr-4 hover:underline md:mr-6">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#home-about-us" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#home-values" className="mr-4 hover:underline md:mr-6">
              Values
            </a>
          </li>
          <li>
            <a href="#home-services" className="mr-4 hover:underline md:mr-6">
              Services
            </a>
          </li>
          <li>
            <a href="#home-process" className="mr-4 hover:underline md:mr-6">
              Process
            </a>
          </li>
          <li>
            <a href="#home-faq" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#home-contact-us" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-neutral-500 sm:text-center">
          © 2024{' '}
          <a href="#" className="hover:underline">
            SY Planning
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
