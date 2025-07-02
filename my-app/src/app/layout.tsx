import Layout from "@/components/Layout";
import type { Metadata } from "next";
import "./globals.css";


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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
