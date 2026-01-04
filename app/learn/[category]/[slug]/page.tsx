import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { Container } from "@/components/ui/Container";
import { MarkdownViewer } from "@/components/content/MarkdownViewer";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ArticlePageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        category: post.category,
        slug: post.slug,
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { category, slug } = await params;
    const post = getPostBySlug(category, slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="py-20">
            <Container>
                <Link href="/learn" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Articles
                </Link>

                <article className="mx-auto max-w-3xl">
                    <header className="mb-10 text-center">
                        <div className="mb-4 flex items-center justify-center gap-2">
                            <span className="inline-block rounded-full bg-secondary/30 px-3 py-1 text-sm font-medium text-foreground capitalize">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-5xl">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center text-sm text-foreground/60">
                            <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
                            <span className="mx-2">•</span>
                            <span>{post.author}</span>
                        </div>
                    </header>

                    <MarkdownViewer content={post.content} />

                    <hr className="my-12 border-foreground/10" />

                    <div className="text-center text-sm text-foreground/60 italic">
                        Disclaimer: The information focused here is for educational purposes only and not medical advice.
                    </div>
                </article>
            </Container>
        </div>
    );
}
