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
              className="rounded-t-lg lg:rounded-l-lg lg:rounded-r-none w-full lg:w-1/3 grayscale object-cover object-left"
              src="/images/generic/moree-railway.jpg"
              alt={''}
              width={500}
              height={500}
            />
            <div className="w-full lg:w-2/3 p-8 content-center">
              <h3 className="mb-4 text-2xl font-semibold">For Local Councils</h3>
              {/* List */}
              <ul className="space-y-4 text-left">
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
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-transparent"
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
              className="rounded-t-lg lg:rounded-r-lg lg:rounded-l-none w-full lg:w-1/3 grayscale object-cover object-left "
              src="/images/generic/planning-image.jpg"
              alt={''}
              width={500}
              height={500}
            />
            <div className="w-full lg:w-2/3 p-8 content-center">
              <h3 className="mb-4 text-2xl font-semibold">For Industry Professionals</h3>
              {/* List */}
              <ul className="space-y-4 text-left">
                <li className="flex space-x-3">
                  <span className="w-full">
                    Do you run a DA lodgement service and needing a regular supply of Statement of
                    Environmental Effects? I am experienced in preparing Statement of Environmental
                    Effects for a wide variety of developments including dwelling houses,
                    outbuildings, dual occupancies, multi dwelling housing, residential flat
                    buildings, commercial and industrial developments.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col lg:flex-row mx-auto text-neutral-900 bg-neutral-200 rounded-lg">
            <Image
              className="rounded-t-lg lg:rounded-l-lg lg:rounded-r-none w-full lg:w-1/3 grayscale object-cover object-right"
              src="/images/generic/aerial-houses.jpg"
              alt={''}
              width={500}
              height={500}
            />
            <div className="w-full lg:w-2/3 p-8 content-center">
              <h3 className="mb-4 text-2xl font-semibold">
                For Property Owners, Developers & Businesses
              </h3>
              {/* List */}
              <ul className="space-y-4 text-left">
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
          {/* Pricing Card */}
          <div className="flex flex-col lg:flex-row-reverse mx-auto text-neutral-900 bg-neutral-200 rounded-lg">
            <Image
              className="rounded-t-lg lg:rounded-r-lg lg:rounded-l-none w-full lg:w-1/3 grayscale object-cover object-left "
              src="/images/generic/generic-house.jpg"
              alt={''}
              width={500}
              height={500}
            />
            <div className="w-full lg:w-2/3 p-8 content-center">
              <h3 className="mb-4 text-2xl font-semibold">Activation Precinct Certificates</h3>
              {/* List */}
              <ul className="space-y-4 text-left">
                <li className="flex space-x-3">
                  <span className="w-full">
                    Since July 2018, the four Special Activation Precincts (SAP) have been declared
                    by the NSW State Government. These SAPs are located within the Moree, Snowy
                    Monaro, Parkes & Wagga Wagga local government areas. Unlike traditional approval
                    pathways, developments within the SAP requires an Activation Precinct
                    Certificate (APC) issued by the Regional Growth NSW Development Corporation
                    (RGDC) pursuant to the State Environmental Planning Policy (Precincts—Regional)
                    2021. Having previously worked within the planning team at RGDC, I am familiar
                    with the APC process and will be able to assist in the following manner:
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
                    Planning lead for your proposed development, liaising with RGDC on your behalf
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
                    Preparation of a Statement of Consistency as required by the APC process
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
                  <span>Lodgement of the APC application via the NSW Planning Portal</span>
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
                  <span>General project coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
