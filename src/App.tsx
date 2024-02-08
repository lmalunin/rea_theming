import React, { useContext, useEffect } from 'react';

import styles from './App.module.scss';
import { ThemeSelectorContext } from './themes/ThemeProvider';
import { setCSSVariables } from './themes/set-css-variables';
import { themes } from './themes/themes';

function App() {
  
  const { themeName, toggleTheme } = useContext(ThemeSelectorContext);
  
  useEffect(() => {
    setCSSVariables(themes.light)
  }, [])
  
  
  return (
      <div className="App">
        <div className={styles.title}>{themeName}</div>
        <br/>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
  );
}

export default App;
