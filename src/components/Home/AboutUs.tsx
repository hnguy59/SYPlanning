export default function AboutUs() {
  return (
    <section id="home-about-us" className=" bg-white">
      <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl rounded-lg md:grid md:grid-cols-2 md:px-6 ">
        <div className="font-light text-neutral-500 sm:text-lg py-16 rounded-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-700">
            Warm welcome
          </h2>
          <p className="mb-4">Hello friends, welcome to my website.</p>
          <p className="mb-4">
            My name is Shaun, a professional town planner that is accredited to the Planning
            Institute of Australia.
          </p>
          <p className="mb-4">
            I have over 7 years of planning experience in practicing Development Assessments across
            both private & public sectors. Yes, this means that I have practiced well over 10,000
            hours in either assessing development applications on behalf of Councils, or preparing
            and lodging Development Applications for businesses and property owners!
          </p>
          <p className="mb-4">
            Being a town planner, I am passionate about anything property and land development. That
            being said, nothing makes me happier than to assist people obtain the relevant approvals
            for their dream house, investment projects, businesses and the like.
          </p>
          <p className="mb-4">
            Without further ado, If you have a project in mind but don’t know where to start, please
            drop a message via the “contact us” page and I will be in touch as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 flex-1 rounded-lg gap-4 bg-top md:bg-left-bottom bg-no-repeat bg-contain aspect-square h-full bg-portrait"></div>
      </div>
    </section>
  )
}
