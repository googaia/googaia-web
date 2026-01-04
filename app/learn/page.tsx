import { getAllPosts } from "@/lib/posts";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/components/content/ArticleCard";

export default function LearnPage() {
    const posts = getAllPosts();

    return (
        <div className="py-20 lg:py-32">
            <Container>
                <div className="mb-16 max-w-2xl">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        Parenting Guides & Tips
                    </h1>
                    <p className="text-xl text-foreground/70">
                        Thoughtful, evidence-based advice to help you navigate the journey of
                        parenthood with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <ArticleCard key={post.slug} post={post} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
