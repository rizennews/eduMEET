"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const VALID_ROUTES = new Set([
  "/",
  "/faq",
  "/federation-model",
  "/get-started",
  "/how-it-works",
  "/it-directors",
  "/leadership",
  "/nren-hub",
  "/nrens",
  "/participation",
  "/researchers",
  "/students-lecturers",
  "/technical-onboarding",
  "/what-is-edumeet",
]);

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Any route not in our defined valid routes is a 404 page
  const is404 = !VALID_ROUTES.has(pathname);

  return (
    <>
      {!is404 && <Navigation />}
      {children}
      {!is404 && <Footer />}
    </>
  );
}
