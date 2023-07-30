import Maps from '../../../public/assets/HugeGlobal.svg'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import { Sections } from '../Layout/Layout.helpers'
import getScrollAnimation from '@/util/getScrollAnimation'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

const FAQs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="flex flex-col w-full my-16" id={Sections.FAQS}>
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
        >
          Huge Global Network of Fast VPN{' '}
        </motion.h3>
        <motion.p
          className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
          variants={scrollAnimation}
        >
          See SY Planning everywhere to make it easier for you when you move locations.
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
          <Maps className="w-full h-auto" />
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  )
}

export default FAQs
