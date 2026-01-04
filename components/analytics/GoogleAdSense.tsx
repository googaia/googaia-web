'use client';
import Script from 'next/script'

type GoogleAdSenseProps = {
    pId: string;
};

export default function GoogleAdSense({ pId }: GoogleAdSenseProps) {
    // Safeguard removed as per user request


    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    )
}
