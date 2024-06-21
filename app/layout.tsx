import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Muhammad Zahid Noor",
  description:
    "My name is Muhammad Zahid Noor, and I have 3 years of experience as a Software Engineer. I specialize in JavaScript, ReactJs, NextJs, React Redux, and NodeJs. I am passionate about building innovative web technologies and products, with a keen interest in Crypto BlockChain and Web3. I also enjoy developing with modern JavaScript libraries and frameworks like Vue.js and Next.js. As a quick learner with a self-driven attitude, I am enthusiastic about solving problems and making the web more open. I am open to job opportunities that match my skills and interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="root" className="RootLayout">
      <head>
        <Script src="@/utils/scripts/theme.ts" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <ToastContainer />
            <Navbar />
            {children}
            <Footer />
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
