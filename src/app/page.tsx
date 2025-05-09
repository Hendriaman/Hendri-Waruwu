"use client";

import Header, { useLanguage } from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import EnglishPortfolio from "@/components/languages/EnglishPortfolio";
import RussianPortfolio from "@/components/languages/RussianPortfolio";
import IndonesianPortfolio from "@/components/languages/IndonesianPortfolio";
import ChineseSimplifiedPortfolio from "@/components/languages/ChineseSimplifiedPortfolio";
import ChineseTraditionalPortfolio from "@/components/languages/ChineseTraditionalPortfolio";
import UkrainianPortfolio from "@/components/languages/UkrainianPortfolio";
import GermanPortfolio from "@/components/languages/GermanPortfolio";
import { LanguageProvider } from "@/components/main/Header";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <PortfolioContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

function PortfolioContent() {
  const { language } = useLanguage();

  const portfolioComponents = {
    en: EnglishPortfolio,
    id: IndonesianPortfolio,
    zhs: ChineseSimplifiedPortfolio,
    zht: ChineseTraditionalPortfolio,
    ru: RussianPortfolio,
    uk: UkrainianPortfolio,
    de: GermanPortfolio
  };

  const PortfolioComponent = portfolioComponents[language as keyof typeof portfolioComponents] || portfolioComponents.en;
  return <PortfolioComponent key={language} />;
}