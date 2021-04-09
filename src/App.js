import { useState } from 'react';
import './App.css';
import ThemeContext from './context/ThenContext';
import Header from './components/Header';
import Characters from './components/Characters';



function App() {

  const [theme, setTheme]= useState('ligth-theme')

  return (
    <ThemeContext.Provider value={{theme, setTheme }}>
      <div className={theme}>
        <Header/>
        <div className="container">
          <Characters/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
