import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const login = useCallback((userData, tokenData) => {
        setUser(userData);
        setToken(tokenData);
        setError(null);
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setToken(null);
        setError(null);
    }, []);

    const setLoading = useCallback((loading) => {
        setIsLoading(loading);
    }, []);

    const setAuthError = useCallback((err) => {
        setError(err);
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            token,
            isLoading,
            error,
            login,
            logout,
            setLoading,
            setAuthError,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);