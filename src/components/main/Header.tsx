"use client";

import { FC, useState, useEffect } from 'react';
import { createContext, useContext } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {}
});

export const LanguageProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

interface HeaderText {
  about: string;
  skills: string;
  contact: string;
}

const Header: FC = () => {
  const { language, setLanguage } = useLanguage();

  const headerText: Record<string, HeaderText> = {
    en: {
      about: 'About',
      skills: 'Skills',
      contact: 'Contact'
    },
    id: {
      about: 'Tentang',
      skills: 'Keahlian',
      contact: 'Kontak'
    },
    zhs: {
      about: '关于',
      skills: '技能',
      contact: '联系'
    },
    zht: {
      about: '關於',
      skills: '技能',
      contact: '聯絡'
    },
    ru: {
      about: 'О нас',
      skills: 'Навыки',
      contact: 'Контакты'
    },
    uk: {
      about: 'Про нас',
      skills: 'Навички',
      contact: 'Контакти'
    },
    de: {
      about: 'Über',
      skills: 'Fähigkeiten',
      contact: 'Kontakt'
    }
  };

  const navItems = [
    { href: '#about', text: headerText[language].about },
    { href: '#skills', text: headerText[language].skills },
    { href: '#contact', text: headerText[language].contact },
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'id', label: 'Bahasa Indonesia' },
    { value: 'zhs', label: '中文 (简体)' },
    { value: 'zht', label: '中文 (繁體)' },
    { value: 'ru', label: 'Русский' },
    { value: 'uk', label: 'Українська' },
    { value: 'de', label: 'Deutsch' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/40 dark:bg-gray-800/40 shadow-lg transition-all duration-300">
      <nav className="max-w-4xl mx-auto px-8 py-4">
        <ul className="flex gap-8 justify-center sm:justify-start items-center">
          {navItems.map(({ href, text }) => (
            <li key={href}>
              <a 
                href={href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {text}
              </a>
            </li>
          ))}
          <li>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              {languageOptions.map(({ value, label }) => (
                <option key={value} value={value} className="bg-white dark:bg-gray-800">{label}</option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;