import React, { useState } from 'react';

export const ThemeSelectorContext = React.createContext({
  themeName: 'dark',
  toggleTheme: () => {
  }
});

export const ThemeProvider = ({ children }: any) => {
  const [themeName, setThemeName] = useState('dark');
  
  const toggleTheme = () => {
    themeName === 'dark' ? setThemeName('light') : setThemeName('dark');
  };
  
  return (
      <ThemeSelectorContext.Provider value={{ themeName, toggleTheme }}>
        {children}
      </ThemeSelectorContext.Provider>
  );
};
