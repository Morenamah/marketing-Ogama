
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-xl font-bold tracking-wider">GAMA</h3>
            <p className="mt-4 text-gray-400">
              Precisão e confiabilidade em cada laudo.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navegação</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <button onClick={() => setCurrentPage(Page.Home)} className="text-base text-gray-300 hover:text-white">Início</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.Valuation)} className="text-base text-gray-300 hover:text-white">Avaliação de Imóveis</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.FAQ)} className="text-base text-gray-300 hover:text-white">Perguntas Frequentes</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage(Page.Contact)} className="text-base text-gray-300 hover:text-white">Contato</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contato</h3>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-gray-400">📍</span>
                <span className="ml-3">Av. Principal, 123, Centro, Cidade-UF, 12345-678</span>
              </li>
              <li className="flex items-center">
                 <span className="flex-shrink-0 h-6 w-6 text-gray-400">📞</span>
                <span className="ml-3">(99) 99999-9999</span>
              </li>
              <li className="flex items-center">
                 <span className="flex-shrink-0 h-6 w-6 text-gray-400">✉️</span>
                <span className="ml-3">contato@gamaavaliacoes.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Siga-nos</h3>
            <div className="mt-4 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-8.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" /></svg>
                </a>
                 <a href="#" className="text-gray-400 hover:text-white">
                     <span className="sr-only">LinkedIn</span>
                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                 </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} Gama Avaliação de Imóveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
