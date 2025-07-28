declare module 'next-themes' {
  export interface UseThemeProps {
    resolvedTheme?: string;
    setTheme: (theme: string) => void;
    themes: string[];
    theme?: string;
    systemTheme?: 'dark' | 'light';
  }
  
  export function useTheme(): UseThemeProps;
  
  export type ThemeAttribute = 'class' | 'style';
  
  export interface ThemeProviderProps {
    children: React.ReactNode;
    attribute?: ThemeAttribute;
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
  }
  
  export const ThemeProvider: React.FC<ThemeProviderProps>;
}