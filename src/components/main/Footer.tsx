"use client";

import React from 'react';
import { useLanguage } from './Header';

interface FooterText {
  copyright: string;
}

const Footer = () => {
  const { language } = useLanguage();

  const footerText: Record<string, FooterText> = {
    en: {
      copyright: '© 2024 Hendriaman Waruwu. All rights reserved.'
    },
    id: {
      copyright: '© 2024 Hendriaman Waruwu. Hak cipta dilindungi.'
    },
    zhs: {
      copyright: '© 2024 Hendriaman Waruwu. 版权所有。'
    },
    zht: {
      copyright: '© 2024 Hendriaman Waruwu. 版權所有。'
    },
    ru: {
      copyright: '© 2024 Hendriaman Waruwu. Все права защищены.'
    },
    uk: {
      copyright: '© 2024 Hendriaman Waruwu. Всі права захищені.'
    },
    de: {
      copyright: '© 2024 Hendriaman Waruwu. Alle Rechte vorbehalten.'
    }
  };

  const currentYear = new Date().getFullYear();
  const copyrightText = footerText[language].copyright.replace('2024', currentYear.toString());

  return (
    <footer className="mt-20 py-6 text-center text-sm text-gray-500 dark:text-gray-400 font-medium border-t border-gray-200 dark:border-gray-800 cursor-default">
      <div className="container mx-auto">
        {copyrightText}
      </div>
    </footer>
  );
};

export default Footer;
