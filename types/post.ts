export interface Post {
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string;
    readTime?: string;
}

export interface Category {
    slug: string;
    title: string;
    description: string;
}
