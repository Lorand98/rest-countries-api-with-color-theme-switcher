import React, { useState } from 'react';

type Theme = {
  isLight: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<Theme>({
  isLight: true,
  toggleTheme: () => {},
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight((prevIsLight) => !prevIsLight);
  };

  const contextValue: Theme = {
    isLight,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
