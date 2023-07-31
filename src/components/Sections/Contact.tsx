import { ArrowBack, ArrowForward, Star } from '@mui/icons-material'
import Slider, { Settings } from 'react-slick'
import { useEffect, useMemo, useRef, useState } from 'react'

import ButtonOutline from '../ButtonOutline'
import ButtonPrimary from '../ButtonPrimary'
import Image from 'next/image'
import Maps from '../../../public/assets/HugeGlobal.svg'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import { Sections } from '../Layout/Layout.helpers'
import getScrollAnimation from '@/util/getScrollAnimation'
import { motion } from 'framer-motion'

const listTestimoni = [
  {
    name: 'iezh Robert',
    image: '/assets/people-3.png',
    city: 'Warsaw',
    country: 'Poland',
    rating: '4.5',
    testimoni:
      'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. SY Planning always the best',
  },
  {
    name: 'iezh Robert',
    image: '/assets/people-3.png',
    city: 'Warsaw',
    country: 'Poland',
    rating: '4.5',
    testimoni:
      'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. SY Planning always the best',
  },
  {
    name: 'iezh Robert',
    image: '/assets/people-3.png',
    city: 'Warsaw',
    country: 'Poland',
    rating: '4.5',
    testimoni:
      'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. SY Planning always the best',
  },
  {
    name: 'iezh Robert',
    image: '/assets/people-3.png',
    city: 'Warsaw',
    country: 'Poland',
    rating: '4.5',
    testimoni:
      'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. SY Planning always the best',
  },
]

const Contact = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [isSliderRefVisible, setIsSliderRefVisible] = useState(false)
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  const settings: Settings = {
    dots: true,
    customPaging: function () {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      )
    },
    dotsClass: 'slick-dots w-max absolute mt-20  ',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  useEffect(() => {
    if (!isSliderRefVisible) {
      return
    }
  }, [sliderRef])

  return (
    <div id={Sections.CONTACT}>
      <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full">
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
              >
                Choose Your Plan
              </motion.h3>
              <motion.p
                variants={scrollAnimation}
                className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
              >
                Let's choose the package that is best for you and explore it happily and cheerfully.
              </motion.p>
            </ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
              <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image src="/assets/Free.png" width={145} height={165} alt="Free Plan" />
                  </div>
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    Free Plan
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">Unlimited Bandwidth</li>
                    <li className="relative check custom-list my-2">Encrypted Connection</li>
                    <li className="relative check custom-list my-2">No Traffic Logs</li>
                    <li className="relative check custom-list my-2">Works on All Devices</li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">Free</p>
                    <ButtonOutline>Select</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/Standard.png"
                      width={145}
                      height={165}
                      alt="Standard Plan"
                    />
                  </div>
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    Standard Plan{' '}
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">Unlimited Bandwidth</li>
                    <li className="relative check custom-list my-2">Encrypted Connection</li>
                    <li className="relative check custom-list my-2">No Traffic Logs</li>
                    <li className="relative check custom-list my-2">Works on All Devices</li>
                    <li className="relative check custom-list my-2">Connect Anywhere </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      $9 <span className="text-black-500">/ mo</span>
                    </p>
                    <ButtonOutline>Select</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image src="/assets/Premium.png" width={145} height={165} alt="Premium Plan" />
                  </div>
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    Premium Plan{' '}
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">Unlimited Bandwidth</li>
                    <li className="relative check custom-list my-2">Encrypted Connection</li>
                    <li className="relative check custom-list my-2">No Traffic Logs</li>
                    <li className="relative check custom-list my-2">Works on All Devices</li>
                    <li className="relative check custom-list my-2">Connect Anywhere </li>
                    <li className="relative check custom-list my-2">Get New Features </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      $12 <span className="text-black-500">/ mo</span>
                    </p>

                    <ButtonOutline>Select</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
          <div className="flex flex-col w-full my-16">
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
                See LaslesVPN everywhere to make it easier for you when you move locations.
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
                <Maps className="w-full h-auto" />
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="flex flex-col w-full my-16">
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
              >
                Trusted by Thousands of Happy Customer{' '}
              </motion.h3>
              <motion.p
                variants={scrollAnimation}
                className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
              >
                These are the stories of our customers who have joined us with great pleasure when
                using this crazy feature.
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="w-full flex flex-col py-12">
              <motion.div variants={scrollAnimation}>
                <Slider
                  {...settings}
                  arrows={false}
                  ref={(element) => {
                    sliderRef.current = element
                    setIsSliderRefVisible(!!element)
                  }}
                  className="flex items-stretch justify-items-stretch"
                >
                  {listTestimoni.map((listTestimonis, index) => (
                    <div className="px-3 flex items-stretch" key={index}>
                      <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                        <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                          <div className="flex order-2 xl:order-1">
                            <Image
                              src={listTestimonis.image}
                              height={50}
                              width={50}
                              alt="Icon People"
                            />
                            <div className="flex flex-col ml-5 text-left">
                              <p className="text-lg text-black-600 capitalize">
                                {listTestimonis.name}
                              </p>
                              <p className="text-sm text-black-500 capitalize">
                                {listTestimonis.city},{listTestimonis.country}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                            <p className="text-sm">{listTestimonis.rating}</p>
                            <span className="flex ml-4">
                              <Star className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                        <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="flex w-full items-center justify-end">
                  <div className="flex flex-none justify-between w-auto mt-14">
                    <div
                      className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-black-500 border hover:bg-black-500 hover:text-white-500 transition-all text-black-500 cursor-pointer"
                      onClick={sliderRef?.current?.slickPrev}
                    >
                      <ArrowBack className="h-6 w-6 " />
                    </div>
                    <div
                      className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-black-500 border hover:bg-black-500 hover:text-white-500 transition-all text-black-500 cursor-pointer"
                      onClick={sliderRef?.current?.slickNext}
                    >
                      <ArrowForward className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full my-16">
            <ScrollAnimationWrapper className="relative w-full mt-16">
              <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                  <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                      Subscribe Now for <br /> Get Special Features!
                    </h5>
                    <p>Let's subscribe with us and find the fun.</p>
                  </div>
                  <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
                <div
                  className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                  style={{ filter: 'blur(114px)' }}
                ></div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
