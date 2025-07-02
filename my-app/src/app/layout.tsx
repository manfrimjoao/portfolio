import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";


export const metadata: Metadata = {
  title: "João Manfrim | Portfolio",
  description: "Personal portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
