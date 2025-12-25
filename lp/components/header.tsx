"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Logo width={90} height={24} className="h-6 w-auto" />
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
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Talk to Bastyon</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("who")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              Who It's For
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              How It Works
            </button>
            <div className="py-2">
              <Link
                href="/bastyon-ai"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bastyon AI
              </Link>
              <Link
                href="/bastyon-data"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bastyon Data
              </Link>
            </div>
            <Button asChild className="w-full mt-2">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Talk to Bastyon
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
