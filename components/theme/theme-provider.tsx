"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Define the valid attribute types
type ThemeAttribute = "class" | "style";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: ThemeAttribute;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ 
  children,
  attribute = "class", // Default to 'class'
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
}