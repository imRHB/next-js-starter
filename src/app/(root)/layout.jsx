import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

export const metadata = {
    title: "Next JS Starter",
    description:
        "GitHub starter template for building modern web applications using Next.js, React, and Tailwind. It includes all the essential setup and configurations to get you started quickly.",
};

export default function MainLayout({ children }) {
    return (
        <React.Fragment>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
}
