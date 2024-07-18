import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import "@styles/global.css";

const poppins = Poppins(
  { 
    weight: ['400'],
    subsets: ["latin"] 
  }
);

export const metadata: Metadata = {
  title: "Hekto",
  description: "Your favourite online shopping mall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav/>
        <main className="">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
