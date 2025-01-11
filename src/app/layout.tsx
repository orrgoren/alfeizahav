import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { Analytics } from '@vercel/analytics/react';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'אלפיזהב - בלוג השקעות, טכנולוגיה וחיים',
  description:
    'אלפיזהב - בלוג שמשלב השקעות חכמות, טכנולוגיה פורצת דרך ותובנות לחיים עם ערך. כי העתיד שלכם מתחיל כאן!',
  robots: 'index, follow',
  keywords:
    'בלוג, אלפיזהב, השקעות, טכנולוגיה, blog, alfeizahav, tech, technology, investments, stock market',
  openGraph: {
    siteName: 'אלפיזהב - בלוג השקעות, טכנולוגיה וחיים',
    locale: 'he',
    type: 'website',
    description:
      'אלפיזהב - בלוג שמשלב השקעות חכמות, טכנולוגיה פורצת דרך ותובנות לחיים עם ערך. כי העתיד שלכם מתחיל כאן!',
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
          <main className="mx-auto max-w-4xl px-4">{children}</main>
          <footer className="z-11 my-4 flex w-full items-center justify-center text-sm font-semibold text-gray-500">
            &copy; 2025 אלפי<span className="text-primary">זהב</span>. כל הזכויות שמורות.
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-5QBNK188V9" />
    </html>
  );
}
