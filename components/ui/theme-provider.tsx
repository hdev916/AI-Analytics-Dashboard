// components/theme/theme-provider.tsx
"use client";

import * as React from "react";
import { 
  ThemeProvider as NextThemesProvider, 
  type ThemeProviderProps as NextThemeProviderProps 
} from "next-themes";

// Create our own type that matches the props we actually use
type ThemeAttribute = "class" | "style";

interface CustomThemeProviderProps {
  children: React.ReactNode;
  attribute?: ThemeAttribute;
  defaultTheme?: "light" | "dark" | "system";
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  attribute = "class",
  ...props
}: CustomThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}