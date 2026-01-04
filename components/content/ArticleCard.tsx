import Link from "next/link";
import { format } from "date-fns";
import { Post } from "@/types/post";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
    post: Post;
}

export function ArticleCard({ post }: ArticleCardProps) {
    return (
        <Link href={`/learn/${post.category}/${post.slug}`} className="group h-full">
            <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-foreground/5 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="p-6 flex flex-col h-full">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full bg-secondary/30 px-2.5 py-0.5 text-xs font-medium text-foreground capitalize">
                            {post.category}
                        </span>
                        <span className="text-xs text-foreground/50">
                            {format(new Date(post.date), "MMMM d, yyyy")}
                        </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="mb-4 text-foreground/70 line-clamp-3 flex-1">
                        {post.excerpt}
                    </p>
                    <div className="mt-auto text-sm font-medium text-primary">
                        Read Article
                    </div>
                </div>
            </div>
        </Link>
    );
}
