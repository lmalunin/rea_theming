import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'primereact/button';

import styles from './App.module.scss';
import { ThemeSelectorContext } from './themes/ThemeProvider';
import { setCSSVariables } from './themes/set-css-variables';
import { themes } from './themes/themes';
import { Calendar } from 'primereact/calendar';
import { PrimeReactContext } from 'primereact/api';

function App() {
  
  const { themeName, toggleTheme } = useContext(ThemeSelectorContext);
  
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/themes/lara-${themeName}-blue/theme.css`;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [themeName]);
  
  useEffect(() => {
    setCSSVariables(themes.light)
  }, [])
  
  
  function setDate(value: any) {
    console.log(value)
  }
  
  const onToggleTheme = () => {
    toggleTheme();
  }
  
  return (
      <div className="App">
        <div className={styles.title}>{themeName}</div>
        <br/>
        <Button className={styles.title} label="Submit" icon="pi pi-check" iconPos="right"/>
        <br/>
        <br/>
        <Calendar value={new Date()} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy"
                  pt={{
                    input: {
                      root: { className: styles.title }
                    },
                    container: {
                      root: { className: styles.title }
                    }
                  }}
        />
        <br/>
        <br/>
        
        <button onClick={onToggleTheme}>Toggle theme</button>
      </div>
  );
}

export default App;
