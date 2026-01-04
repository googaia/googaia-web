"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/products";

interface CartItem extends Product {
    cartId: string; // unique id for card item (product id + variants)
    selectedVariants: Record<string, string>;
    quantity: number;
}

interface ShopContextType {
    cart: CartItem[];
    addToCart: (product: Product, variants: Record<string, string>) => void;
    removeFromCart: (cartId: string) => void;
    updateQuantity: (cartId: string, quantity: number) => void;
    isCartOpen: boolean;
    toggleCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        setIsMounted(true);
        const savedCart = localStorage.getItem("googaia-cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("googaia-cart", JSON.stringify(cart));
        }
    }, [cart, isMounted]);

    const addToCart = (product: Product, selectedVariants: Record<string, string>) => {
        const cartId = `${product.id}-${JSON.stringify(selectedVariants)}`;

        setCart((prev) => {
            const existing = prev.find((item) => item.cartId === cartId);
            if (existing) {
                return prev.map((item) =>
                    item.cartId === cartId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, cartId, selectedVariants, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (cartId: string) => {
        setCart((prev) => prev.filter((item) => item.cartId !== cartId));
    };

    const updateQuantity = (cartId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(cartId);
            return;
        }
        setCart((prev) =>
            prev.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
        );
    };

    const toggleCart = () => setIsCartOpen((prev) => !prev);

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <ShopContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                isCartOpen,
                toggleCart,
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
}

export function useShop() {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error("useShop must be used within a ShopProvider");
    }
    return context;
}
