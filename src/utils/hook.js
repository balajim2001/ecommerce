import { useCallback, useEffect, useRef, useState } from 'react';

// Custom hook to run a function only once
const useRunOnce = (callback) => {
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) {
            callback();
            hasRun.current = true;
        }
    }, []);
};

export default useRunOnce;

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    // Apply theme to document root whenever it changes
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    return { theme, toggleTheme };
}

