"use client"

import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { useTheme } from 'next-themes'

export function Header() {
  const { theme } = useTheme()

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-background">
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={theme === 'dark' ? "/paid-logo-white.png" : "/paid-logo-black.png"}
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
