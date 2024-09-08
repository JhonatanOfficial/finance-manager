"use client"

import { Inter } from "next/font/google";
import "../globals.css";
import { LeftContainer } from "@/components/LeftContainer/LeftContainer";
import { Header } from "@/components/Header";
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
          <main className="flex bg-bg-color overflow-x-auto min-w-[100vw]  min-h-screen">
            <LeftContainer />
            <div className="w-full min-w-[46.5rem]">
              <Header />
              {children}
            </div>
          </main>
        </SessionProvider>

      </body>
    </html>
  );
}
