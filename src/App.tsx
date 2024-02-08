import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import { ThemeSelectorContext } from './themes/ThemeProvider';

function App() {
  
  const { themeName, toggleTheme } = useContext(ThemeSelectorContext);
  
  return (
      <div className="App">
        {themeName}
        <br/>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
  );
}

export default App;
