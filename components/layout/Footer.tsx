import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Baby } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-foreground/5 bg-background py-12">
            <Container>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Baby className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold tracking-tight text-primary">googaia</span>
                        </Link>
                        <p className="text-sm text-foreground/70">
                            Calm, intelligent, and trustworthy tools for modern parents.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Content</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li><Link href="/learn/newborn" className="hover:text-primary">Newborn</Link></li>
                            <li><Link href="/learn/sleep" className="hover:text-primary">Sleep</Link></li>
                            <li><Link href="/learn/feeding" className="hover:text-primary">Feeding</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/apps" className="hover:text-primary">Our Apps</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-foreground/5 pt-8 text-center text-sm text-foreground/50">
                    &copy; {new Date().getFullYear()} GooGaia. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
