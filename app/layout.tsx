import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "@components/Nav";
import AppContext from "./Context";
import Footer from "@components/Footer";
import NextAuthProvider from "./Providers";
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
        <NextAuthProvider>
          <AppContext>
            <Nav/>
            <main className="">
              {children}
            </main>
            <Footer/>
          </AppContext>
        </NextAuthProvider>
      </body>
    </html>
  );
}
