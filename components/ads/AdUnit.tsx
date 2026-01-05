'use client';

import { useEffect, useRef } from 'react';
import { GOOGLE_ADSENSE_ID } from '@/lib/config';

type AdUnitProps = {
    client?: string;
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    responsive?: boolean;
    layoutKey?: string;
    style?: React.CSSProperties;
    className?: string; // Add className prop
};


export function AdUnit({
    client,
    slot,
    format = 'auto',
    responsive = true,
    layoutKey,
    style,
    className,
}: AdUnitProps) {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    // Safeguard removed as per user request to display ads in all environments

    // Ensure client ID is formatted as ca-pub-XXXXXXXXXXXXXXX
    // If client is passed, use it, otherwise use GOOGLE_ADSENSE_ID
    const rawId = client || GOOGLE_ADSENSE_ID;
    const cleanId = rawId.replace(/^ca-|pub-|ca-pub-/g, '');
    const finalClientId = `ca-pub-${cleanId}`;

    return (
        <div className={`overflow-hidden ${className}`} style={{ minHeight: '100px' }}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client={finalClientId}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive}
                data-ad-layout-key={layoutKey}
            />
        </div>
    );
}
