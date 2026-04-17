'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: 'white' | 'gray'
}

export default function Section({ tone = 'white', className, ...props }: SectionProps) {
  return (
    <section
      className={twMerge('section', tone === 'gray' ? 'bg-gray-50' : 'bg-white', className)}
      {...props}
    />
  )
}

