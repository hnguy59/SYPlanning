import Contact from '@/components/Sections/Contact'
import FAQs from '@/components/Sections/FAQs'
import Hero from '@/components/Sections/About'
import Layout from '@/components/Layout/Layout'
import Reviews from '@/components/Sections/Reviews'
import SeoHead from '@/components/SeoHead'
import Services from '@/components/Sections/Services'
import Values from '@/components/Sections/Values'

export default function Home() {
  return (
    <>
      <SeoHead title="SY Planning: Home" />
      <Layout>
        <Hero />
        <Services />
        <Values />
        <FAQs />
        <Contact />
        <Reviews />
      </Layout>
    </>
  )
}
