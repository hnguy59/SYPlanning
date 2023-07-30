import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout/Layout'
import Pricing from '@/components/Pricing'
import SeoHead from '@/components/SeoHead'

export default function Home() {
  return (
    <>
      <SeoHead title="SY Planning: Home" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  )
}
