// AppStateContext.tsx
"use client";

import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

// Define the interface for the context value
interface AppStateContextType {
    blogsRoute: boolean; // Ensure blogsRoute is available
    setBlogsRoute: Dispatch<SetStateAction<boolean>>;
    currentUrl: string; // Ensure blogsRoute is available
    setCurrentUrl: Dispatch<SetStateAction<string>>;
}

// Create the context with an initial type of `undefined`
const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [blogsRoute, setBlogsRoute] = useState<boolean>(false); // Initialize blogsRoute as a string
    const [currentUrl, setCurrentUrl] = useState("");
    
    return (
        <AppStateContext.Provider value={{ blogsRoute, setBlogsRoute,  currentUrl, setCurrentUrl, }}>
            {children}
        </AppStateContext.Provider>
    );
};

export { AppStateContext };
