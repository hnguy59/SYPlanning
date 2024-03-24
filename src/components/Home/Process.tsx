export default function Process() {
  return (
    <section id="home-process" className="bg-neutral-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-neutral-200">
          General DA Process
        </h2>
        <div className="grid grid-cols-11 grid-rows-7 gap-4 text-neutral-400">
          {/* Divider */}
          <div className="col-span-1 col-start-6 row-span-7 flex items-center justify-center"></div>
          {/* Step 1 */}
          <div className="col-span-5 col-start-1 row-span-1 row-start-1 border border-neutral-100 rounded-lg">
            Step 1
          </div>
          {/* Step 2 */}
          <div className="col-span-5 col-start-7 row-span-1 row-start-2 border border-neutral-100 rounded-lg">
            Step 2
          </div>
          {/* Step 3 */}
          <div className="col-span-5 col-start-1 row-span-1 row-start-3 border border-neutral-100 rounded-lg">
            Step 3
          </div>
          {/* Step 4 */}
          <div className="col-span-5 col-start-7 row-span-1 row-start-4 border border-neutral-100 rounded-lg">
            Step 4
          </div>
          {/* Step 5 */}
          <div className="col-span-5 col-start-1 row-span-1 row-start-5 border border-neutral-100 rounded-lg">
            Step 5
          </div>
          {/* Step 6 */}
          <div className="col-span-5 col-start-7 row-span-1 row-start-6 border border-neutral-100 rounded-lg">
            Step 6
          </div>
          {/* Step 7 */}
          <div className="col-span-5 col-start-1 row-span-1 row-start-7 border border-neutral-100 rounded-lg">
            Step 7
          </div>
        </div>
      </div>
    </section>
  )
}
