import { interFont } from '@/app/styles/fonts';
import '@/app/styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interFont.className} antialiased`}>{children}</body>
    </html>
  );
}
