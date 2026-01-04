import ReactMarkdown from 'react-markdown';
import { cn } from "@/lib/utils";

interface MarkdownViewerProps {
    content: string;
    className?: string;
}

export function MarkdownViewer({ content, className }: MarkdownViewerProps) {
    return (
        <div className={cn("prose prose-lg prose-amber max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground/90", className)}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}
