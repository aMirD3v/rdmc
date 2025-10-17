import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import LayoutContent from "@/components/layout/LayoutContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RDMC Jigjiga University Repository",
  description: "An RDMC repository for Jigjiga University to store, manage, and disseminate digital assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <SessionProvider>
          <LayoutContent>{children}</LayoutContent>
        </SessionProvider>
      </body>
    </html>
  );
}
