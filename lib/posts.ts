import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";

const contentDirectory = path.join(process.cwd(), "content");

export function getAllPosts(): Post[] {
    // Ensure directory exists
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const categoryFolders = fs.readdirSync(contentDirectory);
    const allPosts: Post[] = [];

    categoryFolders.forEach((category) => {
        const categoryPath = path.join(contentDirectory, category);
        if (fs.statSync(categoryPath).isDirectory()) {
            const files = fs.readdirSync(categoryPath);
            files.forEach((fileName) => {
                if (fileName.endsWith(".md")) {
                    const slug = fileName.replace(/\.md$/, "");
                    const fullPath = path.join(categoryPath, fileName);
                    const fileContents = fs.readFileSync(fullPath, "utf8");
                    const { data, content } = matter(fileContents);

                    allPosts.push({
                        slug,
                        category,
                        title: data.title,
                        excerpt: data.excerpt,
                        date: data.date,
                        author: data.author,
                        content,
                    });
                }
            });
        }
    });

    // Sort posts by date
    return allPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getPostsByCategory(category: string): Post[] {
    const allPosts = getAllPosts();
    return allPosts.filter((post) => post.category === category);
}

export function getPostBySlug(category: string, slug: string): Post | null {
    try {
        const fullPath = path.join(contentDirectory, category, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        return {
            slug,
            category,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            author: data.author,
            content,
        };
    } catch (error) {
        return null;
    }
}

export function getAllCategories(): string[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }
    return fs.readdirSync(contentDirectory).filter(file => {
        return fs.statSync(path.join(contentDirectory, file)).isDirectory();
    });
}
