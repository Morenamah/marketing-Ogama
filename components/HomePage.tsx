import React from 'react';
import { Page, Service, Testimonial } from '../types';
import { BanknotesIcon, BuildingOfficeIcon, ScaleIcon, CheckCircleIcon } from './icons';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const services: Service[] = [
  {
    icon: <ScaleIcon className="h-10 w-10 text-amber-500" />,
    title: 'Avaliação para Fins Judiciais',
    description: 'Laudos técnicos precisos para processos judiciais, inventários, partilhas e outras necessidades legais.',
  },
  {
    icon: <BanknotesIcon className="h-10 w-10 text-amber-500" />,
    title: 'Avaliação para Garantias Bancárias',
    description: 'Avaliações confiáveis para garantir financiamentos e empréstimos junto a instituições financeiras.',
  },
  {
    icon: <BuildingOfficeIcon className="h-10 w-10 text-amber-500" />,
    title: 'Avaliação de Imóveis Urbanos e Rurais',
    description: 'Análise completa de apartamentos, casas, terrenos, fazendas e glebas, seguindo as normas técnicas.',
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "O laudo da Ogama foi fundamental para o sucesso do nosso processo. Profissionalismo e precisão impecáveis.",
    name: "João Silva",
    role: "Advogado"
  },
  {
    quote: "Conseguimos o financiamento para expandir nosso negócio graças à avaliação rápida e confiável que recebemos.",
    name: "Maria Oliveira",
    role: "Empresária"
  },
  {
    quote: "Atendimento excepcional e um laudo muito bem fundamentado. Recomendo a todos que precisam de uma avaliação séria.",
    name: "Carlos Pereira",
    role: "Cliente Particular"
  }
];

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Cityscape background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Avaliação de Imóveis Urbanos e Rurais
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Laudos técnicos precisos e confiáveis para todas as finalidades.
          </p>
          <button 
            onClick={() => setCurrentPage(Page.Contact)}
            className="mt-8 bg-amber-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-amber-600 transition-transform duration-300 transform hover:scale-105"
          >
            Solicitar Avaliação
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ogama Avaliação de Imóveis
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Somos especialistas em avaliações imobiliárias, comprometidos em fornecer laudos técnicos detalhados e em conformidade com as normas ABNT. Nossa missão é oferecer segurança e clareza para suas decisões patrimoniais, sejam elas judiciais, financeiras ou pessoais.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Com uma equipe experiente e qualificada, garantimos uma análise de mercado aprofundada, resultando em avaliações de alta precisão que refletem o real valor do seu imóvel.
            </p>
             <button 
                onClick={() => setCurrentPage(Page.Valuation)}
                className="mt-6 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
             >
                Saiba mais sobre nossos serviços &rarr;
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/600/400?random=1" 
              alt="Team discussing plans" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Nossos Serviços</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Soluções completas em avaliação imobiliária
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-amber-100 text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
        <section className="py-16 lg:py-24 bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-amber-500 font-semibold tracking-wide uppercase">Por que nos escolher?</h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        A parceria certa para o seu patrimônio
                    </p>
                </div>
                <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <CheckCircleIcon className="absolute h-6 w-6 text-green-400" />
                                <p className="ml-9 text-lg leading-6 font-medium">Precisão e Confiabilidade</p>
                            </dt>
                            <dd className="mt-2 ml-9 text-base text-gray-400">
                                Nossos laudos são baseados em metodologias rigorosas e análise de dados de mercado, garantindo a máxima precisão.
                            </dd>
                        </div>
                         <div className="relative">
                            <dt>
                                <CheckCircleIcon className="absolute h-6 w-6 text-green-400" />
                                <p className="ml-9 text-lg leading-6 font-medium">Experiência Comprovada</p>
                            </dt>
                            <dd className="mt-2 ml-9 text-base text-gray-400">
                                Anos de experiência no mercado imobiliário, atendendo clientes com as mais diversas necessidades.
                            </dd>
                        </div>
                         <div className="relative">
                            <dt>
                                <CheckCircleIcon className="absolute h-6 w-6 text-green-400" />
                                <p className="ml-9 text-lg leading-6 font-medium">Conformidade com Normas</p>
                            </dt>
                            <dd className="mt-2 ml-9 text-base text-gray-400">
                                Seguimos estritamente as normas da ABNT e as melhores práticas do setor para garantir a validade técnica dos nossos laudos.
                            </dd>
                        </div>
                         <div className="relative">
                            <dt>
                                <CheckCircleIcon className="absolute h-6 w-6 text-green-400" />
                                <p className="ml-9 text-lg leading-6 font-medium">Atendimento Personalizado</p>
                            </dt>
                            <dd className="mt-2 ml-9 text-base text-gray-400">
                                Entendemos que cada caso é único. Oferecemos um atendimento próximo para entender e atender suas expectativas.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-md">
                <blockquote className="text-lg text-gray-600">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Pronto para avaliar seu imóvel?</span>
            <span className="block text-white">Entre em contato conosco hoje mesmo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => setCurrentPage(Page.Contact)}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50"
              >
                Solicitar Avaliação
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;