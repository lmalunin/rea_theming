import React, { useEffect, useState } from 'react';
import { themes } from './themes';
import { setCSSVariables } from './set-css-variables';

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
