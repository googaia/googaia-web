import { getAllProducts } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/shop/ProductCard";
import { ZodiacSelector } from "@/components/shop/ZodiacSelector";

export default function ShopPage() {
    const products = getAllProducts();

    return (
        <div className="py-20 lg:py-32">
            <Container>
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        The GooGaia Shop
                    </h1>
                    <p className="text-xl text-foreground/70 mb-8">
                        Thoughtfully designed products for your little stars.
                    </p>
                    <ZodiacSelector />
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
