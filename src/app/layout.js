import localFont from 'next/font/local';
import "./globals.css";

const stolzl = localFont({
  src: [
    {
      path: '../fonts/stolzl_thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/stolzl_light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/stolzl_book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/stolzl_regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/stolzl_medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/stolzl_bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-stolzl'
});

export const metadata = {
  title: "Bora Toker | Personal Website",
  description: "Personal website and portfolio of Bora Toker.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={stolzl.variable}>
      <body>{children}</body>
    </html>
  );
}
