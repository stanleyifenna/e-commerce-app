import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/admin-panel/AuthProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const inter = Inter({ subsets: ["latin"] });
//AOS.init();

export const metadata: Metadata = {
  title: "Doveva - Step into Style with Every Step",
  description: "Step into Style with Every Step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <App>{children}</App>
        </AuthProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
      </body>
    </html>
  );
}
