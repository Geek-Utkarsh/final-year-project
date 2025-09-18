import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="text-center py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">AI Story Generator – Unlock Your Imagination</h1>
        <p className="mt-4 text-foreground-500 max-w-2xl mx-auto">
          Generate captivating stories with AI. Choose genres, tune length, and save your favorites.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button as={Link} href="/story-generator" color="primary" size="lg">Start Writing Free</Button>
          <Button as={Link} href="/register" variant="bordered" size="lg">Go Premium</Button>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { t: "AI Story Generation", d: "High-quality stories from your prompts." },
          { t: "Genre Selection", d: "Sci-fi, fantasy, mystery, romance, and more." },
          { t: "Story History", d: "Save, edit, and revisit your stories." },
          { t: "Premium Benefits", d: "Longer stories, priority generation, and more." }
        ].map((f) => (
          <Card key={f.t}>
            <CardHeader className="font-semibold">{f.t}</CardHeader>
            <CardBody className="text-foreground-500">{f.d}</CardBody>
          </Card>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="justify-between">
              <div>
                <h3 className="text-xl font-semibold">Free Tier</h3>
                <p className="text-foreground-500">Get started with core features</p>
              </div>
              <span className="text-2xl font-bold">$0</span>
            </CardHeader>
            <CardBody>
              <ul className="list-disc list-inside text-foreground-600 space-y-1">
                <li>Short/medium story lengths</li>
                <li>Limited history</li>
                <li>Basic support</li>
              </ul>
              <Button as={Link} href="/register" color="primary" className="mt-4">Create Free Account</Button>
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="justify-between">
              <div>
                <h3 className="text-xl font-semibold">Premium</h3>
                <p className="text-foreground-500">Upgrade for power features</p>
              </div>
              <span className="text-2xl font-bold">$12/mo</span>
            </CardHeader>
            <CardBody>
              <ul className="list-disc list-inside text-foreground-600 space-y-1">
                <li>All lengths incl. long</li>
                <li>Unlimited history</li>
                <li>Priority generation</li>
              </ul>
              <Button as={Link} href="/register" color="secondary" className="mt-4">Go Premium</Button>
            </CardBody>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
}
