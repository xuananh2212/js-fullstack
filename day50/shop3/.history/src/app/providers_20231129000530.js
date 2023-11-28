"use client"
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from "react";
export default function Providers({ children }) {
     return (
          <ThemeProvider>{children}</ThemeProvider>
     )
}
