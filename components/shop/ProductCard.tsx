import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/shop/${product.id}`} className="group">
            <Card className="overflow-hidden border-none shadow-none bg-transparent">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary/20">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <CardContent className="pt-4 px-0">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {product.title}
                    </h3>
                    <p className="text-sm text-foreground/70">{product.category}</p>
                </CardContent>
                <CardFooter className="px-0 pt-0 flex items-center justify-between">
                    <span className="font-bold text-foreground">${product.price.toFixed(2)}</span>
                    <span className="text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        View Details
                    </span>
                </CardFooter>
            </Card>
        </Link>
    );
}
