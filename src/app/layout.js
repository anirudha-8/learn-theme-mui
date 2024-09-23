'use client';

import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
