import { Inter } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next JS Starter",
    description:
        "GitHub starter template for building modern web applications using Next.js, React, and Tailwind. It includes all the essential setup and configurations to get you started quickly.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-zinc-50")}>
                {children}
            </body>
        </html>
    );
}
