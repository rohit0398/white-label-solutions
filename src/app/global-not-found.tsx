import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Mechatron Lab Solutions",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body className="min-h-dvh bg-paper text-ink antialiased">
        <main className="wrap grid min-h-dvh content-center gap-5 py-16">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="max-w-md leading-relaxed text-ink-2">Check the address, or choose where to go next.</p>
          <nav aria-label="Explore the website" className="mt-2 flex flex-wrap gap-3">
            <Link href="/" prefetch={false} className={buttonClass()}>Home</Link>
            <Link href="/solutions" prefetch={false} className={buttonClass("secondary")}>Solutions</Link>
            <Link href="/blog" prefetch={false} className={buttonClass("secondary")}>Blog</Link>
          </nav>
        </main>
      </body>
    </html>
  );
}
