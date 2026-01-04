import Link from "next/link";
import { getAllPosts, getPostsByCategory } from "@/lib/posts";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/components/content/ArticleCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Baby, Moon, Utensils, Brain, Heart, ChevronRight } from "lucide-react";
import { AdUnit } from "@/components/ads/AdUnit";

export default function LearnPage() {
    const allPosts = getAllPosts();
    const latestPosts = allPosts.slice(0, 3);

    // Ad Configuration
    const adSlot = "2417272515";
    const adLayoutKey = "-gw-3+1f-3d+2z";

    // Get latest 3 for each category
    const newbornPosts = getPostsByCategory("newborn").slice(0, 3);
    const sleepPosts = getPostsByCategory("sleep").slice(0, 3);
    const feedingPosts = getPostsByCategory("feeding").slice(0, 3);
    const developmentPosts = getPostsByCategory("development").slice(0, 3);
    const wellnessPosts = getPostsByCategory("wellness").slice(0, 3);

    return (
        <div className="flex flex-col">
            {/* Hero / Latest Section */}
            <section className="bg-background py-16 lg:py-24 border-b border-gray-100">
                <Container>
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="max-w-2xl">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl flex items-center gap-3">
                                <Sparkles className="h-8 w-8 text-primary" />
                                Latest Articles
                            </h1>
                            <p className="text-xl text-foreground/70">
                                Fresh off the press. The newest advice for modern parents.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {latestPosts.map((post) => (
                            <ArticleCard key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Newborn Section */}
            <section className="bg-white py-16">
                <Container>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                            <Baby className="h-6 w-6 text-cta" /> Newborn
                        </h2>
                        <Link href="/learn/newborn">
                            <Button variant="ghost" className="group">
                                View All <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {newbornPosts.map((post) => (
                            <ArticleCard key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* In-Feed Ad Unit */}
            <section className="bg-white pb-8">
                <Container>
                    <div className="mx-auto max-w-4xl">
                        <AdUnit
                            slot={adSlot}
                            layoutKey={adLayoutKey}
                            format="fluid"
                            className="bg-[#FFF8F0] rounded-xl"
                        />
                    </div>
                </Container>
            </section>

            {/* Sleep Section - Alternating Background */}
            <section className="bg-secondary/10 py-16">
                <Container>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                            <Moon className="h-6 w-6 text-primary" /> Sleep
                        </h2>
                        <Link href="/learn/sleep">
                            <Button variant="ghost" className="group">
                                View All <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {sleepPosts.map((post) => (
                            <ArticleCard key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Feeding Section */}
            <section className="bg-white py-16">
                <Container>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                            <Utensils className="h-6 w-6 text-green-600" /> Feeding
                        </h2>
                        <Link href="/learn/feeding">
                            <Button variant="ghost" className="group">
                                View All <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {feedingPosts.map((post) => (
                            <ArticleCard key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Development Section - Alternating Background */}
            <section className="bg-secondary/10 py-16">
                <Container>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                            <Brain className="h-6 w-6 text-purple-600" /> Development
                        </h2>
                        <Link href="/learn/development">
                            <Button variant="ghost" className="group">
                                View All <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {developmentPosts.map((post) => (
                            <ArticleCard key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Wellness Section */}
            <section className="bg-white py-16">
                <Container>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                            <Heart className="h-6 w-6 text-red-500" /> Wellness
                        </h2>
                        <Link href="/learn/wellness">
                            <Button variant="ghost" className="group">
                                View All <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {wellnessPosts.map((post) => (
                            <ArticleCard key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
