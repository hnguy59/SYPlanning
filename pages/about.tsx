import { Navigation } from '@/components/Nav'
import React from 'react'
import { BuildingLibraryIcon, CogIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import clsx from 'clsx'

export default function About() {
  return (
    <div className="bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black from-white via-zinc-600/20 to-white">
      <Navigation />
      <div className="container flex flex-col items-center justify-center px-4 mx-auto pt-[130px]">
        <div className="overflow-hidden py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-3xl font-bold leading-7 opacity-60">Who We Are</h2>
                  <p className="mt-6 text-lg text-justify leading-8 opacity-80">
                    We are dedicated to promoting best practices in urban development through our
                    comprehensive development assessments. With a deep understanding of local
                    contexts and a commitment to delivering excellence, we are dedicated to
                    achieving the best possible outcomes for our clients and the communities they
                    serve.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none opacity-75">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold underline">
                        <CogIcon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                        Proficient.
                      </dt>{' '}
                      <dd className="inline text-gray-900 dark:text-gray-200">
                        Operating in New South Wales, we are well-versed in the intricacies of the
                        planning systems of both New South Wales and Queensland.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold underline">
                        <BuildingLibraryIcon
                          className="absolute left-1 top-1 h-5 w-5"
                          aria-hidden="true"
                        />
                        Focus
                      </dt>{' '}
                      <dd className="inline text-gray-900 dark:text-gray-200">
                        Our primary focus centers on the Strategic Planning and Development
                        Assessment domain. We specialise in preparing and submitting Development
                        Applications in Queensland and New South Wales.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold underline">
                        <GlobeAltIcon
                          className="absolute left-1 top-1 h-5 w-5"
                          aria-hidden="true"
                        />
                        Multi-lingual.
                      </dt>{' '}
                      <dd className="inline text-gray-900 dark:text-gray-200">
                        We possess multilingual capabilities, being fluent in Mandarin, Cantonese,
                        and English.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/images/generic-house.jpg"
                  alt="moree-railway"
                  className="w-100 rounded-xl shadow-xl object-cover ring-1 ring-gray-400/10 h-[32rem] md:-ml-4 lg:-ml-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center px-4 mx-auto">
        <div className="overflow-hidden py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex justify-center items-center">
                <img
                  src="/images/moree-railway.jpg"
                  alt="moree-railway"
                  className="w-100 rounded-xl shadow-xl object-cover ring-1 ring-gray-400/10 h-[32rem] md:-ml-4 lg:-ml-0"
                />
              </div>
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-3xl font-bold leading-7 opacity-60">
                    What is a Development Assessment
                  </h2>
                  <p className="mt-6 text-lg text-left leading-8 opacity-80">
                    Development assessment, also known as DA, is the process of evaluating proposed
                    development projects within a municipality or local government area. It involves
                    reviewing applications, considering factors like zoning regulations,
                    environmental protection, and community feedback to ensure that the development
                    aligns with the area's planning goals. The assessment includes analysing
                    impacts, benefits, and compliance with regulations, and may require studies like
                    environmental and traffic impact assessments. Based on the assessment,
                    authorities may approve the development with conditions or reject it. This
                    crucial process ensures that development occurs in a sustainable and compatible
                    manner within a town or city.
                    <br />
                    If you are still unsure, we are happy to answer any questions you have!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// <h2 className="mt-16 text-2xl font-bold tracking-tight">
//   What is a Development Assessment and do I need one?
// </h2>
// <p className="mt-6">

// </p>
// <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-32 lg:col-start-2 lg:row-span- lg:row-start-1 lg:overflow-hidden">
//   <img
//     className="max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-full"
//     src="/images/moree-railway.jpg"
//     alt="generic house"
//   />
// </div>
