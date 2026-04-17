'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
}

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className={twMerge(className)}
    >
      {children}
    </motion.div>
  )
}

