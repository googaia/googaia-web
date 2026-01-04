"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Baby, Menu, X } from "lucide-react";
import { useShop } from "@/context/shop-context";
import { cn } from "@/lib/utils";

export function Header() {
    const { cartCount } = useShop();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-foreground/5 bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Baby className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold tracking-tight text-primary">googaia</span>
                        </Link>
                        <nav className="hidden md:ml-10 md:flex md:gap-8">
                            <Link href="/learn" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                Learn
                            </Link>
                            <Link href="/shop" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                Shop
                            </Link>
                            <Link href="/apps" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                Apps
                            </Link>
                            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                About
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                        <Link href="/shop/cart" className="relative">
                            <Button variant="ghost" size="icon">
                                <ShoppingBag className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                        {cartCount}
                                    </span>
                                )}
                            </Button>
                        </Link>
                        <Link href="/shop">
                            <Button variant="cta" className="hidden md:inline-flex">
                                Shop Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-foreground/5 py-4">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/learn"
                                className="px-2 py-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Learn
                            </Link>
                            <Link
                                href="/shop"
                                className="px-2 py-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Shop
                            </Link>
                            <Link
                                href="/apps"
                                className="px-2 py-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Apps
                            </Link>
                            <Link
                                href="/about"
                                className="px-2 py-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/shop"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4"
                            >
                                <Button variant="cta" className="w-full">
                                    Shop Now
                                </Button>
                            </Link>
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
}
