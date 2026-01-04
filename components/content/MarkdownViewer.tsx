import ReactMarkdown from 'react-markdown';
import { cn } from "@/lib/utils";
import { AdUnit } from "@/components/ads/AdUnit";
import React from 'react';

interface MarkdownViewerProps {
    content: string;
    className?: string;
}

export function MarkdownViewer({ content, className }: MarkdownViewerProps) {
    // We need a stable counter for paragraphs to inject ads deterministically
    let paragraphCount = 0;

    return (
        <div className={cn("prose prose-lg prose-amber max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground/90", className)}>
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => {
                        paragraphCount++;

                        // Inject ad after 3rd and 7th paragraph
                        const shouldInjectAd = paragraphCount === 3 || paragraphCount === 7;

                        return (
                            <>
                                <p {...props} />
                                {shouldInjectAd && (
                                    <div className="my-8 not-prose">
                                        <AdUnit
                                            slot="2417272515"
                                            layoutKey="-gw-3+1f-3d+2z"
                                            format="fluid"
                                            className="bg-[#FFF8F0] rounded-xl"
                                        />
                                        <div className="text-center text-xs text-foreground/40 mt-2 uppercase tracking-widest">Advertisement</div>
                                    </div>
                                )}
                            </>
                        );
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
