export interface ProductVariant {
    id: string;
    name: string; // e.g., "Size", "Color"
    options: string[];
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    variants: ProductVariant[];
    zodiacSign?: string; // Optional field for zodiac logic
}

const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const zodiacImages: Record<string, string> = {
    "Aries": "/images/products/starborn-aries-v2.png",
    "Taurus": "/images/products/starborn-taurus-v2.png",
    "Gemini": "/images/products/starborn-gemini-v2.png",
    "Cancer": "/images/products/starborn-cancer-v2.png",
    "Leo": "/images/products/starborn-leo-v2.png",
    "Virgo": "/images/products/starborn-virgo-v2.png",
    "Libra": "/images/products/starborn-libra-v2.png",
    "Scorpio": "/images/products/starborn-scorpio-v2.png",
    "Sagittarius": "/images/products/starborn-sagittarius-v2.png",
    "Capricorn": "/images/products/starborn-capricorn-v2.png",
    "Aquarius": "/images/products/starborn-aquarius-v2.png",
    "Pisces": "/images/products/starborn-pisces-v2.png",
};

const zodiacProducts: Product[] = zodiacSigns.map(sign => ({
    id: `starborn-${sign.toLowerCase()}`,
    title: `StarBorn: ${sign} Edition`,
    description: `Celebrate your little ${sign} with our signature StarBorn tee. Made from 100% organic cotton, featuring the minimalist ${sign} constellation. Perfect for the customized wardrobe.`,
    price: 28.00,
    image: zodiacImages[sign] || "/images/products/starborn-tee.png",
    category: "StarBorn",
    zodiacSign: sign,
    variants: [
        { id: "size", name: "Size", options: ["2T", "3T", "4T", "5T"] },
        { id: "color", name: "Color", options: ["Warm Brown", "Cream", "Sage"] }
    ]
}));

export const products: Product[] = [
    ...zodiacProducts, // Add the 12 zodiac shirts
    {
        id: "cloud-onesie-002",
        title: "Dreamy Cloud Onesie",
        description: "Wrap your newborn in pure comfort with our Dreamy Cloud Onesie. Snap closures for easy changing and ultra-soft fabric for sensitive skin.",
        price: 18.00,
        image: "/images/products/cloud-onesie.png",
        category: "Baby",
        variants: [
            { id: "size", name: "Size", options: ["0-3M", "3-6M", "6-12M"] },
        ]
    },
    {
        id: "sunshine-tee-003",
        title: "Hello Sunshine Tee",
        description: "Bring a little brightness to every day. This cheerful yellow tee features a retro-inspired typographic design. Durable enough for play, cute enough for photos.",
        price: 22.00,
        image: "/images/products/sunshine-tee.png",
        category: "Toddler",
        variants: [
            { id: "size", name: "Size", options: ["2T", "3T", "4T"] },
        ]
    }
];

export function getAllProducts() {
    return products;
}

export function getProductById(id: string) {
    return products.find(p => p.id === id);
}

export function getProductByZodiac(sign: string) {
    return products.find(p => p.zodiacSign === sign);
}
