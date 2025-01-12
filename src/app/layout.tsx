'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Rubik } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <SessionProvider>
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
      </SessionProvider>
      <GoogleAnalytics gaId="G-5QBNK188V9" />
    </html>
  );
}
