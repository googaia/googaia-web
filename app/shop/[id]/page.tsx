"use client";

import { use, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import { useShop } from "@/context/shop-context";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    // Unwrap params using React.use() or await in async component. 
    // Since this is client component (due to state), we need to be careful.
    // Actually, standard Pattern in Next 15 is async component for data fetching, then pass to client/inner.
    // But for simple "get by ID from flat list", I can fetch in component if I unwrap params.
    // However, products array is static.

    // Since params is a Promise in newer Next.js versions for async components, 
    // but this is 'use client', we should probably make the parent component async server,
    // pass data to child. But to keep it simple:
    // I will make a wrapper or just use 'use' hook.

    const { id } = use(params);
    const product = getProductById(id);
    const { addToCart } = useShop();

    const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

    if (!product) {
        notFound();
    }

    // Initialize defaults
    if (Object.keys(selectedVariants).length === 0 && product.variants.length > 0) {
        const defaults: Record<string, string> = {};
        product.variants.forEach(v => {
            defaults[v.id] = v.options[0];
        });
        setSelectedVariants(defaults);
    }

    const handleAddToCart = () => {
        addToCart(product, selectedVariants);
    };

    return (
        <div className="py-20">
            <Container>
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
                    {/* Image Gallery */}
                    <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary/10">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Product Info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <div className="mb-4">
                            <span className="text-sm font-medium text-primary">{product.category}</span>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{product.title}</h1>
                        </div>

                        <div className="mt-3">
                            <p className="text-2xl tracking-tight text-foreground font-medium">${product.price.toFixed(2)}</p>
                        </div>

                        <div className="mt-8 space-y-6">
                            <p className="text-base text-foreground/80 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Variants */}
                        <div className="mt-8 space-y-6">
                            {product.variants.map((variant) => (
                                <div key={variant.id}>
                                    <h3 className="text-sm font-medium text-foreground mb-3">{variant.name}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {variant.options.map((option) => {
                                            const isSelected = selectedVariants[variant.id] === option;
                                            return (
                                                <button
                                                    key={option}
                                                    onClick={() => setSelectedVariants(prev => ({ ...prev, [variant.id]: option }))}
                                                    className={cn(
                                                        "relative flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium bg-white transition-all",
                                                        isSelected
                                                            ? "border-primary ring-1 ring-primary text-primary"
                                                            : "border-foreground/20 text-foreground/80 hover:border-foreground/40"
                                                    )}
                                                >
                                                    {option}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex w-full max-w-xs">
                            <Button onClick={handleAddToCart} size="lg" className="w-full flex-1">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
