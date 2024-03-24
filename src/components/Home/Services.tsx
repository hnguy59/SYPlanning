import Image from 'next/image'

export default function Services() {
  return (
    <section id="home-services" className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900">
            Key Services
          </h2>
        </div>
        <div className="space-y-8 flex flex-col">
          {/* Pricing Card */}
          <div className="flex flex-col lg:flex-row mx-auto text-neutral-900 bg-neutral-200 rounded-lg">
            <Image
              className="lg:rounded-l-lg rounded-t-lg w-full lg:w-1/3 grayscale object-cover object-left"
              src="/images/generic/moree-railway.jpg"
              alt={''}
              width={500}
              height={500}
            />
            <div className="w-full lg:w-2/3 p-8">
              <h3 className="mb-4 text-2xl font-semibold">For Local Councils</h3>
              {/* List */}
              <ul role="list" className="space-y-4 text-left">
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Carrying out Development Assessment in accordance with Section 4.15 of the
                    Environmental Planning and Assessment Act 1979. This includes the provision of
                    an assessment report, request of further information letter (if applicable) and
                    a draft notice of determination.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Carrying out a Review of Environmental Factors pursuant to Part 5 of the
                    Environmental Planning and Assessment Act 1979.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span>
                    To ensure Councils are able to meet the assessment timeframes in accordance with
                    the Environmental Planning and Assessment Regulation 2021. Development
                    Assessments are generally carried out with the following schedules:
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Preliminary Assessment – 2 weeks – This includes a preliminary assessment of the
                    proposed development against the relevant Environmental Planning Instruments and
                    also the provision of a Request for Further Information Letter (if applicable).
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Finalisation of Assessments </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col lg:flex-row-reverse mx-auto text-neutral-900 bg-neutral-200 rounded-lg">
            <Image
              className="rounded-t-lg lg:rounded-r-lg w-full lg:w-1/3 grayscale object-cover object-left "
              src="/images/generic/planning-image.jpg"
              alt={''}
              width={500}
              height={500}
            />
            <div className="w-full lg:w-2/3 p-8">
              <h3 className="mb-4 text-2xl font-semibold">For Industry Professionals</h3>
              {/* List */}
              <ul role="list" className="space-y-4 text-left">
                <li className="flex space-x-3">
                  <span className="w-full">
                    Do you run a DA lodgement service and needing a regular supply of Statement of
                    Environmental Effects? I offer fixed fee for common development types such as
                    dwelling houses, outbuildings and dual occupancies with a turn around time of
                    approximately 2 weeks.{' '}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col lg:flex-row mx-auto text-neutral-900 bg-neutral-200 rounded-lg">
            <Image
              className="rounded-t-lg lg:rounded-l-lg w-full lg:w-1/3 grayscale object-cover object-right"
              src="/images/generic/aerial-houses.jpg"
              alt={''}
              width={500}
              height={500}
            />
            <div className="w-full lg:w-2/3 p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                For Property Owners, Developers & Businesses
              </h3>
              {/* List */}
              <ul role="list" className="space-y-4 text-left">
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Completing town planning due diligence assessments for land and property
                    purchase.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Initial town planning investigation to the permissibility of your proposed
                    development.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Preparing and lodging Development Applications via the NSW Planning Portal for
                    your proposed development.{' '}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
