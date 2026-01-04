"use client";

import { useShop } from "@/context/shop-context";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();

    if (cart.length === 0) {
        return (
            <div className="py-20 lg:py-32">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/20 text-primary">
                            <ShoppingBag className="h-10 w-10" />
                        </div>
                        <h1 className="mb-4 text-3xl font-bold">Your cart is empty</h1>
                        <p className="mb-8 text-foreground/60 max-w-md">
                            Looks like you haven't added any items to your cart yet. Explore our shop to find beautiful things for your little one.
                        </p>
                        <Link href="/shop">
                            <Button size="lg">Start Shopping</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="py-20">
            <Container>
                <h1 className="mb-12 text-3xl font-bold">Shopping Cart</h1>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <ul className="divide-y divide-foreground/10 border-t border-b border-foreground/10">
                            {cart.map((item) => (
                                <li key={item.cartId} className="flex py-6">
                                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-foreground/10 bg-secondary/10">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-foreground">
                                                <h3>
                                                    <Link href={`/shop/${item.id}`}>{item.title}</Link>
                                                </h3>
                                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-foreground/50">{Object.values(item.selectedVariants).join(" / ")}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <span className="text-foreground/60">Qty</span>
                                                <select
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.cartId, parseInt(e.target.value))}
                                                    className="rounded-md border-foreground/20 bg-transparent py-1 pl-2 pr-6 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                                >
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCart(item.cartId)}
                                                    className="font-medium text-red-500 hover:text-red-600 flex items-center gap-1"
                                                >
                                                    <Trash2 className="h-4 w-4" /> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="rounded-lg bg-secondary/10 p-6">
                            <h2 className="text-lg font-medium text-foreground">Order Summary</h2>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
                                    <div className="text-base font-medium text-foreground">Subtotal</div>
                                    <div className="text-base font-medium text-foreground">${cartTotal.toFixed(2)}</div>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <div className="text-base font-medium text-foreground">Total</div>
                                    <div className="text-base font-medium text-foreground">${cartTotal.toFixed(2)}</div>
                                </div>
                            </div>
                            <Button className="mt-6 w-full" size="lg" variant="cta">
                                Proceed to Checkout
                            </Button>
                            <p className="mt-4 text-xs text-center text-foreground/50">
                                Shipping and taxes calculated at checkout.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
