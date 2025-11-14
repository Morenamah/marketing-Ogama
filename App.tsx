
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ValuationPage from './components/ValuationPage';
import FaqPage from './components/FaqPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage setCurrentPage={setCurrentPage} />;
      case Page.Valuation:
        return <ValuationPage />;
      case Page.FAQ:
        return <FaqPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans text-gray-800">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
