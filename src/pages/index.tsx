import Contact from '@/components/Sections/Contact'
import Hero from '@/components/Sections/About'
import Layout from '@/components/Layout/Layout'
import SeoHead from '@/components/SeoHead'
import Services from '@/components/Sections/Services'

export default function Home() {
  return (
    <>
      <SeoHead title="SY Planning: Home" />
      <Layout>
        <Hero />
        <Services />
        <Contact />
      </Layout>
    </>
  )
}
