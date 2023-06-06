import { Navigation } from '@/components/Nav'
import React from 'react'
import { BuildingLibraryIcon, CogIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black from-white via-zinc-600/20 to-white">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 opacity-60">About</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tightsm:text-4xl">
                    A better workflow
                  </p>
                  <p className="mt-6 text-lg leading-8 opacity-80">
                    Our mission is to enhance the quality of living, working, and recreational
                    environments for individuals through meticulous urban planning.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none opacity-75">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold underline">
                        <CogIcon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                        Proficient.
                      </dt>{' '}
                      <dd className="inline text-gray-900 dark:text-gray-200">
                        Operating in New South Wales, we are a proficient Urban Planning firm
                        well-versed in the intricacies of the planning systems of both New South
                        Wales and Queensland.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold underline">
                        <BuildingLibraryIcon
                          className="absolute left-1 top-1 h-5 w-5"
                          aria-hidden="true"
                        />
                        Focus.
                      </dt>{' '}
                      <dd className="inline text-gray-900 dark:text-gray-200">
                        Our primary focus centers on the Strategic Planning and Development
                        Assessment domain.
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
              <img
                src="/images/aerial-houses.jpg"
                alt="Aerial houses"
                className="w-100 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
