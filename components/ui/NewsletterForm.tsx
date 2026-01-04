"use client";

import { subscribeUser } from "@/app/actions";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const result = await subscribeUser(formData);

        if (result.success) {
            setStatus("success");
            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            console.error(result.message);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    if (status === "success") {
        return (
            <div className="rounded-lg bg-green-500/10 p-6 text-center border border-green-500/20 animate-in fade-in zoom-in duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Welcome to the family! 🎉</h3>
                <p className="text-white/90">
                    You're on the list. Keep an eye on your inbox for your first tip.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row w-full max-w-lg mx-auto">
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                disabled={status === "loading"}
                className="flex-1 rounded-full border-none bg-[#FDFBF7] px-6 py-4 text-gray-900 placeholder:text-gray-500 focus:ring-4 focus:ring-cta/50 shadow-lg text-lg"
                required
            />
            <Button
                variant="cta"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                disabled={status === "loading"}
            >
                {status === "loading" ? "Joining..." : "Subscribe"}
            </Button>
        </form>
    );
}
