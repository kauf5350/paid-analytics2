"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { useTheme } from 'next-themes'

export function Header() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect runs on the client, so we can safely set mounted to true
  useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted yet, return a placeholder to avoid content shift
  if (!mounted) {
    return <header className="w-full py-4 px-6 flex justify-between items-center bg-background" />
  }

  // Use resolvedTheme instead of theme for more reliable results
  const currentTheme = resolvedTheme === 'system' ? 'light' : resolvedTheme

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-background">
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={currentTheme === 'dark' ? "/paid-logo-white.png" : "/paid-logo-black.png"}
          alt="Paid Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <div className="absolute right-6">
        <ModeToggle />
      </div>
    </header>
  )
}
