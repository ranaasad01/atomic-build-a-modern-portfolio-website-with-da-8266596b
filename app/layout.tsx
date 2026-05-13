import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Rivera — Full-Stack Engineer",
  description: "Full-stack engineer crafting beautiful, performant web experiences with React, Next.js, and Node.js.",
  keywords: ["Full-Stack Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Alex Rivera" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVars = geistSans.variable + " " + geistMono.variable;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontVars + " antialiased"}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
