import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "@/styles/globals.css";
import SiteNavbar from "@/components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen flex flex-col">
          <SiteNavbar />
          <main className="container mx-auto max-w-6xl px-4 py-8 flex-1">
            <Component {...pageProps} />
          </main>
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
