export default function AboutUs() {
  return (
    <section id="home-about-us">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Warm welcome
          </h2>
          <p className="mb-4">
            Hello friends, welcome to my website. My name is Shaun, a professional town planner that
            is accredited to the Planning Institute of Australia.
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
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  )
}
