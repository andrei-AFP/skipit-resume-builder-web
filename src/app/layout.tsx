import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/app/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SkipIT - Resume Builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased font-montserrat`}>
        <div className="p-10 lg:flex lg:max-w-[1920px] lg:mx-auto lg:p-20">{children}</div>
      </body>
    </html>
  );
}
