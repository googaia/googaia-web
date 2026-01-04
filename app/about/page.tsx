import { Container } from "@/components/ui/Container";
import { Baby, Heart, ShieldCheck, Sparkles, Leaf, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-secondary/10 py-20 lg:py-32">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                            About GooGaia
                        </h1>
                        <p className="text-xl text-foreground/80 leading-relaxed">
                            We are on a mission to help new and modern parents feel calmer, more informed, and more supported during the beautiful chaos of early parenthood.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Philosophy Grid */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Heart className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">Gentle & Calm</h3>
                            <p className="text-foreground/70">
                                Parenthood is overwhelming enough. Our content and tools are designed to reduce anxiety, not add to it.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/30 text-primary">
                                <Sparkles className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">Intelligent</h3>
                            <p className="text-foreground/70">
                                We believe in evidence-based information presented in a way that respects your intelligence.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cta/50 text-primary">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">Trustworthy</h3>
                            <p className="text-foreground/70">
                                We only recommend products and tools we would use for our own families. No fluff.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                                <Leaf className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">Sustainable</h3>
                            <p className="text-foreground/70">
                                Our StarBorn trees are made from 100% organic cotton, kindly to the planet and your baby's skin.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">Community First</h3>
                            <p className="text-foreground/70">
                                We are building a village. A safe, judgment-free zone where all parents are welcome.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                                <Baby className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">Baby Led</h3>
                            <p className="text-foreground/70">
                                Following the child's natural pace in everything we do, from feeding to app design.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Story */}
            <section className="bg-white py-24">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mb-8 text-3xl font-bold text-center">Our Story</h2>
                        <div className="prose prose-lg prose-amber mx-auto text-foreground/80">
                            <p>
                                GooGaia was born out of a late-night realization. As new parents ourselves, scrolling through endless forums and conflicting advice at 3 AM, we realized something was missing.
                            </p>
                            <p>
                                We wanted a place that felt like a deep breath. A place where we could find tools that actually worked, products that were beautiful and safe, and advice that didn't make us feel like we were doing everything wrong.
                            </p>
                            <p>
                                So we built it. GooGaia is a combination of "Goo" (the universal language of babies) and "Gaia" (earth/mother), symbolizing the grounded, natural connection between parent and child.
                            </p>
                            <p>
                                Welcome to the family.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
