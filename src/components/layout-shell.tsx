"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotFound = pathname === "/404" || pathname === "/_not-found";

  return (
    <>
      {!isNotFound && <Navigation />}
      {children}
      {!isNotFound && <Footer />}
    </>
  );
}
