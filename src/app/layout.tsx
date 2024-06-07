'use client';
import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className="flex flex-col items-center w-full justify-between min-h-screen">
          <div className="h-full w-full ">
            <Navigation />
            <main className="bg-[#F5F5F5]">{children}</main>
          </div>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </QueryClientProvider>
    </html>
  );
}
