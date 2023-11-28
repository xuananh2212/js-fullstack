import './globals.scss';
import { ThemeProvider } from 'next-themes';
export const metadata = {
  title: 'shop 03',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  )
}
