import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './Theme';

const ThemeContext = React.createContext();

function ThemeProviderWrapper(props) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProviderWrapper };
