
import React, { useState } from 'react';
import { Page } from '../types';
import { MenuIcon, XIcon } from './icons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, currentPage, setCurrentPage, children, onClick }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        setCurrentPage(page);
        if (onClick) onClick();
      }}
      className={`py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-amber-500 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { page: Page.Home, text: 'Início' },
    { page: Page.Valuation, text: 'Avaliação de Imóveis' },
    { page: Page.FAQ, text: 'Perguntas Frequentes' },
    { page: Page.Contact, text: 'Contato' },
  ];

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setCurrentPage(Page.Home)}
              className="text-white text-2xl font-bold tracking-wider"
            >
              GAMA
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.text} page={link.page} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                  {link.text}
                </NavLink>
              ))}
              <button 
                onClick={() => setCurrentPage(Page.Contact)}
                className="ml-4 bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors duration-300"
              >
                Solicitar Avaliação
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink 
                key={link.text} 
                page={link.page} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block w-full text-left">{link.text}</span>
              </NavLink>
            ))}
             <button 
                onClick={() => {
                  setCurrentPage(Page.Contact);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors duration-300"
              >
                Solicitar Avaliação
              </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
