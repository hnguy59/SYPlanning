import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import { Sections } from '../Layout/Layout.helpers'
import getScrollAnimation from '@/util/getScrollAnimation'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div id={Sections.CONTACT}>
      <ScrollAnimationWrapper>
        <motion.div
          className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
          variants={scrollAnimation}
        >
          {/* <Netflix className="h-18 w-auto" /> */}
          <img src="/assets/Icon/amazon.png" className="h-14 w-auto mt-4 lg:mt-2" alt="" />
          <img src="/assets/Icon/netflix.png" className="h-14 w-auto mt-2 lg:mt-0" alt="" />
          <img src="/assets/Icon/reddit.png" className="h-12 w-auto mt-2 lg:mt-0" alt="" />
          <img src="/assets/Icon/discord.png" className="h-14 w-auto mt-2 lg:mt-0" alt="" />
          <img src="/assets/Icon/spotify.png" className="h-12 w-auto mt-2 lg:mt-0" alt="" />
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  )
}

export default Contact
