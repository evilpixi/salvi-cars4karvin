import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const fontRaleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cars For Karvin",
  description: "Find your best car!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body
        className={`${fontRaleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
