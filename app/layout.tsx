import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contador de arroz",
  description: "Simulação de contagem de grãos de arroz.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}