import { HTMLMotionProps, MotionProps, motion } from 'framer-motion'
import { HTMLAttributes, ReactNode } from 'react'

interface ScrollAnimationWrapperProps extends HTMLMotionProps<'div'> {
  children: ReactNode
}

export default function ScrollAnimationWrapper({
  children,
  ...props
}: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
