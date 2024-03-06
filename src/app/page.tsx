import {
    AboutUs, ContactUs, FAQ, Hero, Process, Services, Testimonials, Values
} from '@components';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <AboutUs />
      <Values />
      <Services />
      <Process />
      <FAQ />
      <ContactUs />
    </>
  )
}
