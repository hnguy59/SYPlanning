'use client'

import Image from 'next/image';
import { FormEvent } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  subject: HTMLInputElement
  message: HTMLTextAreaElement
}

export default function ContactUs() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const email = formData.get('email')
      const subject = formData.get('subject')
      const message = formData.get('message')
      const data = JSON.stringify({ email, subject, message })

      fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section id="home-contact-us" className="bg-neutral-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-200">Contact Us</h2>
        <p className="mb-1 lg:mb-2 font-light text-neutral-400 sm:text-xl">
          Do you have a question? Leave a message below and I will respond to you as quickly as I
          can!
        </p>
        <div className="mb-4 lg:mb-8 font-light text-neutral-400 sm:text-xl">
          Alternatively, you can reach me by calling{' '}
          <a className="font-semibold hover:underline" href="tel:0493974911">
            0493 974 911
          </a>
          , or by emailing{' '}
          <a className="font-semibold hover:underline" href="mailto:services@syplanning.com.au">
            services@syplanning.com.au
          </a>
        </div>
        <div className="flex flex-row gap-16">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center lg:items-start space-y-8 w-full lg:w-1/2"
          >
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-neutral-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-neutral-900 border border-neutral-300 text-neutral-400 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="example@domain.com"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-semibold text-neutral-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-neutral-400 bg-neutral-900 rounded-lg border border-neutral-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2 w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-neutral-300 "
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-neutral-400 bg-neutral-900 rounded-lg shadow-sm border border-neutral-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
                defaultValue={''}
              />
            </div>
            <button
              type="submit"
              className="self-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
          <Image
            className="hidden lg:flex rounded-lg w-1/2 object-center object-cover grayscale"
            src="/images/generic/maps.jpg"
            alt={'planning image'}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}
