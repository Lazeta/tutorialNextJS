// @ts-ignore: allow side-effect import of global CSS
import '@/app/ui/global.css';
// @ts-ignore: allow side-effect import of font CSS
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
