'use client'

import * as React from 'react'

export default function ScrollProgressBar() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const next = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setProgress(next)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full origin-left bg-blue-600"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

