import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Baby, Smartphone, BookOpen, ShoppingBag, Newspaper, FlaskConical, Users, Leaf } from "lucide-react";
import Image from "next/image";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

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

      {/* Trending Topics Section */}
      <section className="bg-background py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Trending Now</h2>
            <p className="mt-4 text-lg text-foreground/70">Read what other parents are loving this week.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Article 1 */}
            <Link href="/learn/sleep/mastering-nap-transitions" className="group block">
              <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                  <span className="bg-primary/10 px-2 py-1 rounded-full">Sleep</span>
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/60">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Mastering Nap Transitions</h3>
                <p className="text-foreground/70 line-clamp-3">From 3 naps to none. Learn the signs of readiness and get sample schedules for every drop.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Read Article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/learn/newborn/ultimate-diapering-guide" className="group block">
              <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                  <span className="bg-primary/10 px-2 py-1 rounded-full">Newborn</span>
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/60">6 min read</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">The Ultimate Diapering Guide</h3>
                <p className="text-foreground/70 line-clamp-3">Cloth vs. Disposable? Rash prevention? We cover everything you need to know about the bottom line.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Read Article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/learn/wellness/managing-parental-burnout" className="group block">
              <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                  <span className="bg-primary/10 px-2 py-1 rounded-full">Wellness</span>
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/60">4 min read</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Managing Parental Burnout</h3>
                <p className="text-foreground/70 line-clamp-3">You aren't just "tired." Recognizing the signs of burnout and practical ways to reclaim your peace.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Read Article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Our Mission Section */}
      <section className="bg-secondary/10 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why GooGaia?</h2>
            <p className="mt-4 text-lg text-foreground/70">Built on values that matter to modern families.</p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center">
            {/* Value 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-gray-900/5 text-primary">
                <FlaskConical className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Science-Backed</h3>
              <p className="mt-2 text-foreground/70">We don't guess. We research. Every guide is vetted by experts and backed by current pediatric standards.</p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-gray-900/5 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Community-First</h3>
              <p className="mt-2 text-foreground/70">Parenting takes a village. We are building a supportive space where you are never alone in the chaos.</p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-gray-900/5 text-primary">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Sustainable</h3>
              <p className="mt-2 text-foreground/70">Good content. Good products. Good for the planet. We prioritize eco-conscious choices.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        {/* Background pattern for visual interest */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <Container>
          <div className="mx-auto max-w-2xl text-center relative z-10">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-sm">
              Join the GooGaia Family
            </h2>
            <p className="mb-10 text-lg text-white/90 font-medium leading-relaxed">
              Parenting is hard. We make it 1% easier every week. <br />
              Get expert tips, exclusive shop discounts, and early access to new tools.
            </p>

            <NewsletterForm />

            <p className="mt-6 text-xs text-white/60 font-medium tracking-wide uppercase">
              No spam. Just love. Unsubscribe anytime.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
