
import React from 'react';
import { CheckCircleIcon } from './icons';

const ValuationPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-800 py-24 sm:py-32">
        <img 
            src="https://picsum.photos/1920/1080?random=2&grayscale" 
            alt="Abstract architecture" 
            className="absolute inset-0 w-full h-full object-cover opacity-20" 
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Avaliação de Imóveis
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Entenda nosso processo detalhado para garantir laudos precisos e confiáveis, seguindo as mais rigorosas normas técnicas.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">O que fazemos</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Nossas Especialidades em Avaliação
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Cobrimos uma vasta gama de necessidades de avaliação imobiliária, sempre com foco na precisão técnica e na clareza para o cliente.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold">Imóveis Urbanos</h3>
                <p className="mt-2 text-gray-600">Avaliação de casas, apartamentos, terrenos e imóveis comerciais em áreas urbanas para venda, locação, partilha ou garantias.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold">Imóveis Rurais</h3>
                <p className="mt-2 text-gray-600">Análise de fazendas, sítios e glebas, considerando aptidão agrícola, benfeitorias, recursos hídricos e localização.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold">Finalidades Diversas</h3>
                <p className="mt-2 text-gray-600">Laudos para processos judiciais, garantias bancárias, fins contábeis, seguros, desapropriações e consultoria de investimentos.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">Como Funciona Nosso Processo</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Nosso processo de avaliação é estruturado em etapas claras para garantir a máxima eficiência e precisão.
                    </p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start">
                            <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                            <span className="ml-3 text-gray-700"><strong className="font-semibold">1. Contato Inicial e Definição do Escopo:</strong> Entendemos sua necessidade e coletamos as informações preliminares sobre o imóvel.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                            <span className="ml-3 text-gray-700"><strong className="font-semibold">2. Vistoria do Imóvel:</strong> Realizamos uma visita técnica detalhada para levantamento de características, estado de conservação e documentação.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                            <span className="ml-3 text-gray-700"><strong className="font-semibold">3. Pesquisa e Análise de Mercado:</strong> Coletamos dados de mercado e utilizamos metodologias estatísticas para determinar o valor justo do imóvel.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                            <span className="ml-3 text-gray-700"><strong className="font-semibold">4. Elaboração do Laudo Técnico:</strong> Compilamos todas as informações em um Laudo de Avaliação completo, claro e fundamentado, em conformidade com as normas da ABNT.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                            <span className="ml-3 text-gray-700"><strong className="font-semibold">5. Entrega e Esclarecimentos:</strong> Entregamos o laudo final e ficamos à disposição para esclarecer quaisquer dúvidas.</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="https://picsum.photos/600/700?random=3" alt="Blueprint of a house" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ValuationPage;
