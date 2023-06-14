'use client'

import { siteData } from '@/util/data'
import clsx from 'clsx'
import { Facebook, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { Navigation } from '@/components/Nav'

const features = [
  {
    name: (
      <div className="flex gap-1">
        <Mail name="Mail" />
        Email
      </div>
    ),
    description: (
      <Link href={`mailto:${siteData.email}`} target="_blank" className="hover:underline">
        {siteData.email}
      </Link>
    ),
  },
  {
    name: (
      <div className="flex gap-1">
        <Phone className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" />
        Contact Number
      </div>
    ),
    description: (
      <Link href={`tel:${siteData.phone}`} target="_blank" className="hover:underline">
        {siteData.phone}
      </Link>
    ),
  },
  {
    name: (
      <div className="flex gap-1">
        <Facebook name="Facebook" />
        Facebook
      </div>
    ),
    description: (
      <Link href={siteData.facebook} target="_blank" className="hover:underline">
        SY Planning
      </Link>
    ),
  },
  {
    name: (
      <div className="flex gap-1">
        <Linkedin name="Instagram" />
        LinkedIn
      </div>
    ),
    description: (
      <Link href={siteData.linkedin} target="_blank" className="hover:underline">
        Shaun-yong
      </Link>
    ),
  },
]

interface FormValues {
  name: string
  email: string
  phoneNumber: string
  message: string
}

export default function ContactUs() {
  const [isEnquireOnline, setIsEnquireOnline] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const createMessage = (data: FormValues) => {
    return `SY Planning Contact Form
    ---------------------
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phoneNumber}
    Message: ${data.message}
    ---------------------`
  }

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/twilio', {
        body: JSON.stringify({ message: createMessage(data) }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
    } catch (e) {
      console.error(e)
    } finally {
      setIsEnquireOnline(false)
      setIsLoading(false)
      reset()
    }
  }

  return (
    <div className="bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black from-white via-zinc-600/20 to-white">
      <Navigation />
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center h-screen gap-x-8 gap-y-16 px-4 py-6 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        {isEnquireOnline ? (
          <div key="enquire-now" className="transition">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Connect!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-4 max-w-xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Kento"
                      className={clsx(
                        'dark:bac block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                        errors.name && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                      )}
                      {...register('name', { required: true })}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 ">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="email@example.com"
                      className={clsx(
                        'dark:bac block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                        errors.email && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                      )}
                      {...register('email', { required: true })}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 ">
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      autoComplete="tel"
                      placeholder="04XX XXX XXX"
                      className={clsx(
                        'dark:bac block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                        errors.phoneNumber && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                      )}
                      {...register('phoneNumber', { required: true })}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      rows={4}
                      placeholder="How may we be of service to you today?"
                      className={clsx(
                        'block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:ring-indigo-600 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6',
                        errors.message && 'ring-red-500 focus:ring-red-500 dark:ring-red-500'
                      )}
                      defaultValue={''}
                      {...register('message', { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col items-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="block w-full flex-1 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send
                </button>
                <button
                  onClick={() => setIsEnquireOnline(false)}
                  className=":hover w-fit flex-1 underline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div key="lets-connect" className="transition-opacity duration-300 ease-out">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Connect!</h2>
            <p className="mt-4">
              Have a question or want to get in touch? Contact us now and we'll be happy to assist
              you. We're here to help and look forward to hearing from you soon!
            </p>
            <dl className="mb-16 mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature, i) => (
                <div key={i} className="border-t border-gray-700 dark:border-gray-200  pt-4">
                  <dt className="font-medium">{feature.name}</dt>
                  <dd className="mt-2 text-sm">{feature.description}</dd>
                </div>
              ))}
            </dl>
            <button
              onClick={() => setIsEnquireOnline(true)}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enquire online
            </button>
          </div>
        )}
        <div className="grid">
          <Image
            src="/images/aerial-houses.jpg"
            alt="Clear 1"
            width={2048}
            height={1304}
            className="rounded-md h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
