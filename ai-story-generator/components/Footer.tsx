import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t py-10">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-foreground-500">© {new Date().getFullYear()} AI Story Generator</p>
        <nav className="flex gap-6">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
