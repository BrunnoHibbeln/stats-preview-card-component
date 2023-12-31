import "./globals.css";

import { Inter } from "next/font/google";
import { Lexend_Deca } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend-deca",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexendDeca.variable} bg-dark-blue h-[120vh] xl:h-screen flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
