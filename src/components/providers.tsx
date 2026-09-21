"use client";

import { RouterProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <RouterProvider navigate={router.push}>
        {children}
      </RouterProvider>
    </NextThemesProvider>
  );
}
