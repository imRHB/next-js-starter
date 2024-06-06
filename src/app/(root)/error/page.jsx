export const metadata = {
    title: "Error",
    description:
        "GitHub starter template for building modern web applications using Next.js, React, and Tailwind. It includes all the essential setup and configurations to get you started quickly.",
};

export default function ErrorPage() {
    throw new Error("Throwing an error!");
}
