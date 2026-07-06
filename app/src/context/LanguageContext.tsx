'use client';
import React, { createContext, useState, useContext } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (enText: string, idText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('en');

    const t = (enText: string, idText: string) => (lang === 'en' ? enText : idText);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}