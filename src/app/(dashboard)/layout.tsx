"use client"

import { Inter } from "next/font/google";
import "../globals.css";
import { LeftContainer } from "@/components/Dashboard/LeftContainer/LeftContainer";
import { Header } from "@/components/Dashboard/Header";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} center min-h-screen`}>

        <SessionProvider>
          <main className="flex bg-bg-color w-[90rem] pr-[1.5625rem] overflow-x-auto">
            <LeftContainer />
            <div className="w-full">
              <Header />
              {children}
            </div>
          </main>
        </SessionProvider>

      </body>
    </html>
  );
}
