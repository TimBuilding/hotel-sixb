"use client";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";

const client = createClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrismicProvider client={client}>
        <body className="flex flex-col items-center w-full justify-between min-h-screen">
          <div className="h-full w-full">
            <Navigation />
            <main className="bg-[#F5F5F5] pb-10">{children}</main>
          </div>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </PrismicProvider>
    </html>
  );
}
