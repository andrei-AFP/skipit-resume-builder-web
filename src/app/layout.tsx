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
  description: 'SkipIT - Resume Builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased font-montserrat`}>
        <div className="px-5 pt-10 pb-25 lg:flex lg:max-w-[1920px] lg:mx-auto lg:p-10">
          {children}
        </div>
      </body>
    </html>
  );
}
