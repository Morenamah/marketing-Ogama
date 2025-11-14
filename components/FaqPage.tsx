
import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDownIcon } from './icons';

const faqData: FAQItem[] = [
  {
    question: 'O que é um Laudo de Avaliação de Imóvel?',
    answer: 'É um documento técnico elaborado por um profissional qualificado que determina o valor de mercado de um imóvel. Ele é baseado em normas técnicas, análise de mercado e características específicas do bem.',
  },
  {
    question: 'Por que eu preciso de uma avaliação de imóvel profissional?',
    answer: 'Uma avaliação profissional garante um valor justo e imparcial para o seu imóvel, sendo essencial para negociações de compra e venda, processos judiciais, financiamentos, inventários e para tomar decisões de investimento seguras.',
  },
  {
    question: 'Quais documentos são necessários para a avaliação?',
    answer: 'Geralmente, são necessários a Matrícula do Imóvel atualizada, o carnê do IPTU ou ITR, e, se houver, plantas e projetos do imóvel. Documentos adicionais podem ser solicitados dependendo da finalidade da avaliação.',
  },
  {
    question: 'Quanto tempo leva para o laudo ficar pronto?',
    answer: 'O prazo varia conforme a complexidade do imóvel e a finalidade da avaliação. Em média, após a vistoria e a entrega de todos os documentos, o laudo é concluído em 5 a 10 dias úteis.',
  },
  {
    question: 'A avaliação de vocês tem validade legal?',
    answer: 'Sim. Nossos laudos são elaborados em estrita conformidade com as normas da ABNT (Associação Brasileira de Normas Técnicas), o que lhes confere validade técnica e legal para serem utilizados em processos judiciais, bancos e outras instituições.',
  },
];

const FaqAccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-start justify-between text-left text-gray-500"
        >
          <span className="text-lg font-medium text-gray-900">{item.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDownIcon
              className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
            />
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-4 pr-12">
          <p className="text-base text-gray-600">{item.answer}</p>
        </dd>
      )}
    </div>
  );
};

const FaqPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-center text-lg text-gray-500">
            Tire suas dúvidas sobre o processo de avaliação de imóveis.
          </p>
          <dl className="mt-12 space-y-4">
            {faqData.map((item, index) => (
              <FaqAccordionItem key={index} item={item} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
