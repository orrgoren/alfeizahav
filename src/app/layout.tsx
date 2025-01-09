import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "אלפיזהב - בלוג השקעות, טכנולוגיה וחיים",
  description: "אלפיזהב - בלוג השקעות, טכנולוגיה וחיים",
  robots: "index, follow",
  keywords:
    "בלוג, אלפיזהב, השקעות, טכנולוגיה, blog, alfeizahav, tech, technology, investments, stock market",
  openGraph: {
    siteName: "אלפיזהב - בלוג השקעות, טכנולוגיה וחיים",
    locale: "he",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${rubik.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-4xl mx-auto px-4">{children}</main>
          <footer className="my-4 flex items-center justify-center w-full font-semibold text-sm text-gray-500 z-11">
            &copy; 2025 אלפי<span className="text-primary">זהב</span>. כל
            הזכויות שמורות.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
