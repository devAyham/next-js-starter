import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global/globals.scss";
import { SessionProvider } from "@/providers/SessionProvider";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Source Safe app",
  description: "source safe is a file management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <AuthProvider>{children}</AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
