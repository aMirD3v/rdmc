'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const isSubmitterPage = pathname.startsWith("/submit");

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <SessionProvider>
          {isAdminPage || isSubmitterPage ? (
            <main>{children}</main>
          ) : (
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
