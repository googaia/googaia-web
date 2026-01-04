import { getPostsByCategory, getAllCategories } from "@/lib/posts";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/components/content/ArticleCard";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        category,
    }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params;
    const posts = getPostsByCategory(category);

    if (posts.length === 0) {
        notFound();
    }

    return (
        <div className="py-20 lg:py-32">
            <Container>
                <div className="mb-16">
                    <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">Category</div>
                    <h1 className="capitalize mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        {category}
                    </h1>
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
