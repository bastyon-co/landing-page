"use client"

import { useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 100, height = 28, className = "h-7 w-auto" }: LogoProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <span 
        className="font-bold text-foreground" 
        style={{ 
          fontSize: `${Math.max(height * 0.6, 16)}px`,
          lineHeight: `${height}px`,
          display: 'inline-block'
        }}
      >
        Bastyon
      </span>
    )
  }

  return (
    <img
      src="/bastyon-logo.png"
      alt="Bastyon"
      className={className}
      onError={() => setImageError(true)}
      style={{ 
        display: 'block',
        width: 'auto',
        maxHeight: '100%',
        objectFit: 'contain'
      }}
    />
  )
}

