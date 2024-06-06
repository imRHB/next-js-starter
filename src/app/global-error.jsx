"use client";

import { useEffect } from "react";

export default function GlobalErrorPage({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <section className="flex h-screen flex-col items-center justify-center gap-4">
                    <h2 className="text-xl font-semibold text-red-400">
                        Something went wrong!
                    </h2>
                    <button onClick={() => reset()}>Try again</button>
                </section>
            </body>
        </html>
    );
}
