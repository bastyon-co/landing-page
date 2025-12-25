import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/bastyon-logo-icon.png" 
              alt="Bastyon" 
              className="h-8 w-auto" 
              style={{ display: 'block' }}
            />
          </Link>
          <p className="text-center text-sm text-muted-foreground">
            Your AI Tech Partner for SMBs, Operators, and Founders
          </p>
          <p className="text-center text-xs text-muted-foreground">Serving clients remotely and worldwide</p>
          <p className="text-center text-xs text-muted-foreground">
            © 2026 Bastyon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
