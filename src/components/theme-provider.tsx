// theme-provider.tsx (simplified example)
import React, { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('system')

  useEffect(() => {
    const savedTheme = Cookies.get('theme') as Theme | undefined
    if (savedTheme) {
      setThemeState(savedTheme)
      applyTheme(savedTheme)
    } else {
      applyTheme('system')
    }
  }, [])

  const applyTheme = (theme: Theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // For system, you can implement media query if needed
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    Cookies.set('theme', newTheme, { expires: 365 })
    applyTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
