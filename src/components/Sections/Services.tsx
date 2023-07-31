import Image from 'next/image'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import { Sections } from '../Layout/Layout.helpers'
import getScrollAnimation from '@/util/getScrollAnimation'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

const features = [
  'Powerfull online protection.',
  'Internet without borders.',
  'Supercharged VPN',
  'No specific time limits.',
]

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div
      id={Sections.SERVICES}
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-2 text-black-500">
              You can explore the features that we provide with fun and have their own functions
              each feature.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="flex flex-col w-full my-16">
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
    </div>
  )
}

export default Services
