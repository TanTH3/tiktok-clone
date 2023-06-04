import { useState, createContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isLogIn, setIsLogIn] = useState(false);

  const handleLogger = () => {
    setIsLogIn((prev) => !prev);
  };

  const context = {
    isLogIn,
    handleLogger,
  };
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
