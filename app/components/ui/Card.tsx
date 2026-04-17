'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'highlight' | 'glass'
}

export default function Card({ variant = 'default', className, ...props }: CardProps) {
  const base =
    variant === 'highlight'
      ? 'highlight-box'
      : variant === 'glass'
        ? 'soft-glass p-6'
        : 'card'
  return <div className={twMerge(base, className)} {...props} />
}

