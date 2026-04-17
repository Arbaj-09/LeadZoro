'use client'

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const AnimatedCounter = ({ value, text }: { value: number; text: string }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [0.5, 1],
        opacity: [0, 1],
        transition: { duration: 0.5 }
      })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ scale: 0.5, opacity: 0 }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? {
          opacity: 1,
          transition: {
            duration: 0.8
          }
        } : {}}
        className="text-5xl md:text-6xl font-bold mb-2"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? {
            opacity: 1,
            transition: {
              duration: 2
            }
          } : {}}
          className="text-blue-600"
        >
          {inView ? value : "0"}
          {value === 100 && "%"}
          {value === 50 && "+"}
        </motion.span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2
          }
        } : {}}
        className="text-gray-600 text-lg"
      >
        {text}
      </motion.p>
    </motion.div>
  )
}

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        className="container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedCounter value={50} text="Brands Trust Us" />
          <AnimatedCounter value={100} text="Transparent Reporting" />
        </div>
      </motion.div>
    </div>
  )
}

export default Counter