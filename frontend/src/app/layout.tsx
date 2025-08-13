import MainLayout from "@/components/MainLayout";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App",
  description: "Saiofam Sample App",
  applicationName: "App",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-[#475b4e] text-[#ECE8F0] ${geistSans.variable} ${geistMono.variable} text-shadow-[#342c46] text-shadow-lg/30`}
        style={{
          backgroundImage: "linear-gradient(#0000007a, #0000007a)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Analytics />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
