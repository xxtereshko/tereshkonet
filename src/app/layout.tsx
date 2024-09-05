import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxim Tereshko",
  description: "homepage",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
