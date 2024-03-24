import Image from 'next/image'

export default function Values() {
  return (
    <section id="home-values" className="bg-neutral-900">
      <div className="flex flex-col py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-16 ">
          <div className="flex-1">
            <Image
              className="rounded-lg object-cover object-right"
              src="/images/generic/scales.jpg"
              alt={''}
              width={4096}
              height={2731}
            />
          </div>
          <div className="font-light text-neutral-400 sm:text-lg flex-1 flex flex-col gap-4 w-full">
            <h2 className="text-4xl tracking-tight font-extrabold text-neutral-200">Our Values</h2>
            <div className="flex flex-row gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-300">Integrity</h3>
                <p>
                  I ensure that all projects are carried out with integrity. If I don’t think your
                  proposal will be approved, I will let you know up front!
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-300">Cost Effective</h3>
                <p>
                  Being a small business, I can provide cost effective planning services without
                  needing to pass on significant overhead costs to my clients.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-300">Efficiency</h3>
                <p>
                  Land and property development is an expensive exercise. This usually means that
                  the longer it takes to obtain the approval, the costlier the project becomes. I
                  pride myself in providing planning services in a timely manner, ensuring projects
                  are streamlined and completed with minimal delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
