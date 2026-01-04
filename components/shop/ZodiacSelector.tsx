"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { getProductByZodiac } from "@/lib/products";

// Simple helper to get zodiac sign from date
function getZodiacSign(day: number, month: number): string {
    if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) return "Capricorn";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    return "Capricorn";
}

export function ZodiacSelector() {
    const [month, setMonth] = useState<number>(1);
    const [day, setDay] = useState<number>(1);
    const router = useRouter();

    const handleFindGift = () => {
        const sign = getZodiacSign(day, month);
        // Redirect to the specific product page for this sign
        // Since we created IDs like 'starborn-aries', we can construct the URL
        router.push(`/shop/starborn-${sign.toLowerCase()}`);
    };

    return (
        <div className="rounded-2xl bg-secondary/20 p-8 md:p-12 text-center my-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Find their StarBorn Sign</h2>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                Enter the little one's birthday to discover their perfectly matched celestial organic tee.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <select
                    value={month}
                    onChange={(e) => setMonth(parseInt(e.target.value))}
                    className="h-12 rounded-lg border-none bg-white px-4 py-2 text-foreground focus:ring-2 focus:ring-primary w-full sm:w-auto"
                >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                        <option key={m} value={m}>{new Date(0, m - 1).toLocaleString('default', { month: 'long' })}</option>
                    ))}
                </select>

                <select
                    value={day}
                    onChange={(e) => setDay(parseInt(e.target.value))}
                    className="h-12 rounded-lg border-none bg-white px-4 py-2 text-foreground focus:ring-2 focus:ring-primary w-full sm:w-auto"
                >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>

                <Button onClick={handleFindGift} variant="cta" size="lg" className="h-12 w-full sm:w-auto">
                    Reveal Magic
                </Button>
            </div>
        </div>
    );
}
