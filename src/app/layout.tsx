import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/Header/Header";

const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Find Movies app",
  description: "An awesome app to find movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <Header />
        {children}
        <bds />
      </body>
    </html>
  );
}
