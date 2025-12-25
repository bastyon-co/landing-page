import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/bastyon-logo.png" alt="Bastyon" width={140} height={32} className="h-8 w-auto" />
          </Link>
          <p className="text-center text-sm text-muted-foreground">
            Your AI Tech Partner for SMBs, Operators, and Founders
          </p>
          <p className="text-center text-xs text-muted-foreground">Serving clients remotely and worldwide</p>
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bastyon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
