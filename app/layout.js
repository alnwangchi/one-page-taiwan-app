import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: '拓展閱讀無界 計次借閱無限',
  description: '拓展閱讀無界 計次借閱無限',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={roboto.className}>
      <body className=''>{children}</body>
    </html>
  );
}
