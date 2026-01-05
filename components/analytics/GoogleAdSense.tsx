'use client';
import Script from 'next/script'
import { GOOGLE_ADSENSE_ID } from '@/lib/config';

type GoogleAdSenseProps = {
    pId?: string;
};

export default function GoogleAdSense({ pId = GOOGLE_ADSENSE_ID }: GoogleAdSenseProps) {
    // Ensure the ID works whether provided with "pub-" or without, and add the required "ca-" prefix for the script
    const cleanId = pId.replace(/^ca-|pub-|ca-pub-/g, '');
    const finalId = `ca-pub-${cleanId}`;

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${finalId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    )
}
