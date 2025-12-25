export function TrustedBySection() {
  return (
    <section className="py-12 sm:py-16 bg-secondary/10 border-y">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">Trusted By</p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
          <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
            Logistics Co.
          </div>
          <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
            EdTech Startup
          </div>
          <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
            Finance Firm
          </div>
          <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-semibold">
            Retail Brand
          </div>
        </div>
      </div>
    </section>
  )
}
