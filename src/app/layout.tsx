import type { Metadata } from "next";
import { Kufam } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";

const kufam = Kufam({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Poftifolio de Matheus Mota",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={kufam.className}>
      <Header/>
        {children}
        </body>
    </html>
  );
}
