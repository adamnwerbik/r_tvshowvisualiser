import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./components/Footer";

export const metadata = {
  title: "epigrΔde",
  description: "Compare TV show ratings trend across seasons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
