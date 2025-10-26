import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wisetag - Conecta tu mundo con un solo toque',
  description: 'Tecnología NFC para profesionales y marcas. Tarjetas, manillas y collares NFC con planes personalizados.',
  keywords: 'NFC, tarjetas digitales, tecnología, networking, perfiles digitales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}