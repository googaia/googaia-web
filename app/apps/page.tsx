import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Moon, Milk, Baby, BarChart } from "lucide-react";

export default function AppsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative isolate overflow-hidden bg-background">
                <Container className="pt-24 pb-16 lg:pt-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
                            <div className="lg:max-w-lg">
                                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                                    Coming Soon
                                </span>
                                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                                    Simplicity is sanity.
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-foreground/80">
                                    Nurture is the stripped-back, distraction-free baby tracker you've been waiting for. No ads, no community drama, just the essentials for your peace of mind.
                                </p>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <Moon className="h-5 w-5 text-primary" />
                                        <span className="text-foreground/80 font-medium">Sleep Tracking</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Milk className="h-5 w-5 text-primary" />
                                        <span className="text-foreground/80 font-medium">Feeding Logs</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Baby className="h-5 w-5 text-primary" />
                                        <span className="text-foreground/80 font-medium">Diaper Changes</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BarChart className="h-5 w-5 text-primary" />
                                        <span className="text-foreground/80 font-medium">Growth Charts</span>
                                    </div>
                                </div>

                                <div className="mt-10 flex flex-col gap-4 sm:flex-row items-center">
                                    <input
                                        type="email"
                                        placeholder="Enter email for beta access"
                                        className="w-full sm:w-auto min-w-[300px] rounded-full border border-foreground/20 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <Button size="lg" className="w-full sm:w-auto">Join Waitlist</Button>
                                </div>
                            </div>
                            <div className="relative lg:pl-4 lg:pt-4">
                                <div className="relative mx-auto w-[300px] rounded-[3rem] border-[8px] border-foreground/10 bg-foreground/10 shadow-2xl">
                                    <div className="aspect-[9/19.5] overflow-hidden rounded-[2.5rem] bg-white">
                                        <Image
                                            src="/images/nurture-app.png"
                                            alt="Nurture App Interface"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-50" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
