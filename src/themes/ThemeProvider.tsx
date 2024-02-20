import React, { useContext, useEffect, useState } from 'react';
import { themes } from './themes';
import { setCSSVariables } from './set-css-variables';
import { PrimeReactContext } from 'primereact/api';

export const ThemeSelectorContext = React.createContext({
  themeName: 'light',
  toggleTheme: () => {
  }
});

export const ThemeProvider = ({ children }: any) => {
  const [themeName, setThemeName] = useState('light');
  const [theme, setTheme] = useState<any>(themes['light']);
  
  
  useEffect(() => {
    setCSSVariables(theme);
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/themes/lara-${themeName}-indigo/theme.css`;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
    
  }, [themeName])
  
  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName('light');
      
    } else {
      setTheme(themes.dark);
      setThemeName('dark');
    }
  };
  
  return (
      <ThemeSelectorContext.Provider value={{ themeName, toggleTheme }}>
        {children}
      </ThemeSelectorContext.Provider>
  );
};
