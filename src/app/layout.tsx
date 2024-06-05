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
      <body className="flex flex-col items-center justify-between min-h-screen">
        <div className="h-full">
          <Navigation />
          {children}
        </div>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
