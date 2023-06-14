import { Navigation } from '@/components/Nav'
import { HomeIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import React from 'react'

export default function About() {
  const { theme, resolvedTheme } = useTheme()

  return (
    <div className="bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black from-white via-zinc-600/20 to-white">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-bold leading-7 opacity-60">What We Offer</h1>
                  <p className="mt-6 text-xl leading-8 opacity-60">
                    We understand that every project is unique, and we pride ourselves on our
                    ability to tailor our services to meet your specific needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className={clsx(
                  'max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-full',
                  (theme === 'light' || resolvedTheme === 'light') && 'invert'
                )}
                src="/images/diagram.png"
                alt="diagram"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 lg:max-w-lg opacity-60">
                  <ul role="list" className="space-y-8">
                    <li className="flex gap-x-3">
                      <HomeIcon className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold">Development Application Review.</strong>{' '}
                        The planner would review and assess development applications to ensure
                        compliance with zoning regulations, building codes, and other planning
                        policies. They would evaluate the proposed development's impact on land use,
                        infrastructure, environment, and community.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <HomeIcon className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold">Site Analysis.</strong> The planner would
                        conduct a detailed analysis of the development site, considering factors
                        such as topography, access, utilities, and surrounding land uses. This
                        analysis helps in understanding the site's constraints and opportunities for
                        development.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <HomeIcon className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold">Development Negotiations.</strong> The
                        planner may negotiate with developers, landowners, and other stakeholders to
                        address concerns and negotiate appropriate conditions for development
                        approval. They would work to find solutions that balance the interests of
                        various parties involved.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <HomeIcon className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold">
                          Development Approval Documentation.
                        </strong>{' '}
                        The planner would prepare reports and documentation summarising the
                        assessment process, findings, and recommendations. This may include drafting
                        development assessment reports, preparing conditions of approval, and
                        providing advice on required documentation for the development application.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <HomeIcon className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold">Post-Approval Monitoring.</strong> After a
                        development is approved, the planner may be involved in monitoring the
                        project's implementation to ensure compliance with the approved plans and
                        conditions. They may conduct site inspections, review progress reports, and
                        address any non-compliance issues that arise.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    These services may vary depending on the specific requirements of the
                    development project and the regulations and processes of the local planning
                    authority.
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
