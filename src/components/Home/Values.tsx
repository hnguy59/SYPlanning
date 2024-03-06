import Image from 'next/image';

export default function Values() {
  return (
    <section id="home-values">
      <div className="flex flex-col py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex flex-row gap-16 ">
          <Image
            className="rounded-lg flex flex-1"
            src="/images/ice-house.jpg"
            alt={''}
            width={612}
            height={383}
          />
          <div className="font-light text-gray-500 sm:text-lg flex-1 flex flex-col gap-4">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900">Our Values</h2>
            <div className="flex flex-row gap-8">
              <span className="h-fit p-2 w-[128px] flex text-4xl items-center justify-center font-bold rounded-xl border-4 border-gray-500">
                I
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Integrity</h3>
                <p>
                  I ensure that all projects are carried out with integrity. If I don’t think your
                  proposal will be approved, I will let you know up front!
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <span className="h-fit p-2 w-[128px] flex text-4xl items-center justify-center font-bold rounded-xl border-4 border-gray-500">
                C
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Cost Effective</h3>
                <p>
                  Being a small business, I can provide cost effective planning services without
                  needing to pass on significant overhead costs to my clients.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <span className="h-fit p-2 w-[128px] flex text-4xl items-center justify-center font-bold rounded-xl border-4 border-gray-500">
                E
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Efficiency</h3>
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
