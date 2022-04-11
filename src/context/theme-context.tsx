import React, { useEffect, useState } from 'react';

type Theme = {
  isLight: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<Theme>({
  isLight: true,
  toggleTheme: () => {},
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const storedIsLightString = localStorage.getItem('isLight');

    if (storedIsLightString !== null) {
      const storedIsLight: boolean = JSON.parse(storedIsLightString);
      setIsLight(storedIsLight);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLight', JSON.stringify(isLight));
  }, [isLight]);

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
