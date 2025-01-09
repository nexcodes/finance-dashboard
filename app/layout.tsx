import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/providers/provider";
import { cn } from "@/lib/utils";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Finance Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(space_grotesk.className, "antialiased")}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
