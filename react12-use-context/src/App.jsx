import { useState } from 'react';
import './App.css'
import { SimpleContext } from './context/SimpleContext';
import { ThemeContext } from './context/ThemeContext';
import Page from './components/Page';





function App() {
  const[isDark, setIsDark] = useState(false);
  return (
      <ThemeContext.Provider value={{isDark, setIsDark}}>

      <div className='App'>
      <Page></Page>
	    </div>
      </ThemeContext.Provider>
  );
}

export default App
