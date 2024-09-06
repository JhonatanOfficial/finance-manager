'use client'

import { LoginSection } from "@/components/login";
import { SessionProvider } from "next-auth/react";


export default function Home() {
  return (
    <SessionProvider>
      <main className="w-full min-h-screen bg-[#1C1A2E] center">

        <LoginSection />

      </main>
    </SessionProvider>
  );
}
