import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Baby, Smartphone, BookOpen, ShoppingBag, Newspaper } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute inset-0 -z-10 opacity-30">
          {/* Abstract background blobs for visual interest */}
          <div className="absolute -top-[20%] right-0 h-[600px] w-[600px] rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cta blur-3xl" />
        </div>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Parenting, <span className="text-primary">simplified</span>.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-foreground/80 sm:text-xl">
              GooGaia helps new and modern parents feel calmer, more informed, and
              more supported during early parenthood through thoughtful content,
              trusted tools, and meaningful products.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/learn">
                <Button size="lg" variant="cta" className="w-full sm:w-auto">
                  Start Learning
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse Shop
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-foreground/50">
              Trusted by modern parents everywhere.
            </p>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-secondary/20 shadow-2xl">
                {/* Hero Lifestyle Image */}
                <Image
                  src="/images/lifestyle-mom.png"
                  alt="Mother and baby connecting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights Section */}
      <section className="bg-white/50 py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Apps */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative h-64 w-full overflow-hidden rounded-2xl bg-secondary/10">
                <Image
                  src="/images/nurture-app.png"
                  alt="Nurture App"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Parenting Apps</h3>
              <p className="mt-2 text-foreground/70">Simple, focused tools to track sleep, feeding, and milestones.</p>
              <Link href="/apps" className="mt-4 text-primary font-medium hover:underline">Discover Apps &rarr;</Link>
            </div>

            {/* Shop */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative h-64 w-full overflow-hidden rounded-2xl bg-secondary/10">
                {/* Toddler Lifestyle Image */}
                <Image
                  src="/images/lifestyle-toddlers.png"
                  alt="Toddlers playing"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Baby Essentials</h3>
              <p className="mt-2 text-foreground/70">Curated, organic, and beautiful products for your little ones.</p>
              <Link href="/shop" className="mt-4 text-primary font-medium hover:underline">Visit Shop &rarr;</Link>
            </div>

            {/* Learn */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-64 w-full flex items-center justify-center rounded-2xl bg-secondary/20">
                <Newspaper className="h-20 w-20 text-primary/50" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Guides & Tips</h3>
              <p className="mt-2 text-foreground/70">Expert-backed advice on sleep, feeding, and development.</p>
              <Link href="/learn" className="mt-4 text-primary font-medium hover:underline">Read Guides &rarr;</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-24 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Join the GooGaia Family</h2>
            <p className="mb-8 text-white/80">
              Get weekly parenting tips, exclusive shop discounts, and early access to our new apps.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-none px-6 py-3 text-foreground focus:ring-2 focus:ring-cta"
                required
              />
              <Button variant="cta" size="lg" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-xs text-white/60">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
