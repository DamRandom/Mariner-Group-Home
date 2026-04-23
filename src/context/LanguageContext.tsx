"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred-language", lang);
  };

  // Helper to get nested translation value
  const t = (path: string): string | string[] => {
    const keys = path.split(".");
    let result: unknown = translations[language];
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in (result as Record<string, unknown>)) {
        result = (result as Record<string, unknown>)[key];
      } else {
        console.warn(`Translation key not found: ${path} for language: ${language}`);
        return path;
      }
    }

    return (typeof result === 'string' || Array.isArray(result)) ? result : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'es' ? 'lang-es' : 'lang-en'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
