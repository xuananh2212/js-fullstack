import { ThemeProvider } from 'next-themes';

export default function providers({ children }) {
     return (
          <ThemeProvider>{children}</ThemeProvider>
     )
}
