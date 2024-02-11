import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./components/Footer";
import { Providers } from "./providers";

export const metadata = {
  title: "epigrΔde",
  description: "Compare TV show ratings trend across seasons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"
            async
          ></script>
        </Providers>
      </body>
    </html>
  );
}
