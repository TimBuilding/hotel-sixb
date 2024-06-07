import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center w-full justify-between min-h-screen">
        <div className="h-full w-full ">
          <Navigation />
          <main className="bg-[#F5F5F5]">{children}</main>
        </div>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
