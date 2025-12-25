"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 64
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/bastyon-logo.png" alt="Bastyon" width={100} height={28} className="h-7 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            What We Do
          </button>
          <button
            onClick={() => scrollToSection("who")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Who It's For
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Products
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/bastyon-ai" className="cursor-pointer">
                  Bastyon AI
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/bastyon-data" className="cursor-pointer">
                  Bastyon Data
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Button asChild>
          <Link href="#contact">Talk to Bastyon</Link>
        </Button>
      </div>
    </header>
  )
}
