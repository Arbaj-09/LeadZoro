'use client'

import * as React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type ButtonTone = 'primary' | 'secondary'

type ButtonProps = {
  tone?: ButtonTone
  className?: string
  children: React.ReactNode
} & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, 'href' | 'className' | 'children'>)
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
)

export default function Button({ tone = 'primary', className, children, ...props }: ButtonProps) {
  const base = tone === 'primary' ? 'btn-primary' : 'btn-secondary'

  if ('href' in props && typeof props.href === 'string') {
    const { href, ...rest } = props
    return (
      <Link href={href} className={twMerge(base, className)} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={twMerge(base, className)} {...props}>
      {children}
    </button>
  )
}

