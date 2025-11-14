import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    console.log('Form data submitted:', formData);
    // Simulate API call
    setTimeout(() => {
      setFormStatus('submitted');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000); // Reset form status after 5s
    }, 1500);
  };

  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 w-screen bg-gray-100" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Entre em Contato</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Vamos Conversar
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              Pronto para dar o próximo passo? Preencha o formulário ao lado para solicitar uma avaliação ou tirar suas dúvidas. Nossa equipe entrará em contato o mais breve possível.
            </p>
            <div className="mt-8 text-gray-600 space-y-4">
               <p className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-gray-500">📍</span>
                <span className="ml-3">Av. Principal, 123, Centro, Cidade-UF, 12345-678</span>
              </p>
              <p className="flex items-center">
                 <span className="flex-shrink-0 h-6 w-6 text-gray-500">📞</span>
                <span className="ml-3">(99) 99999-9999</span>
              </p>
              <p className="flex items-center">
                 <span className="flex-shrink-0 h-6 w-6 text-gray-500">✉️</span>
                <span className="ml-3">contato@ogamaavaliacoes.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg lg:ml-auto lg:w-full lg:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite uma Avaliação</h3>
            {formStatus === 'submitted' ? (
                <div className="text-center p-8 bg-green-50 rounded-lg">
                    <h4 className="text-xl font-semibold text-green-800">Mensagem Enviada!</h4>
                    <p className="mt-2 text-green-700">Obrigado por entrar em contato. Retornaremos em breve.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">Nome completo</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md" placeholder="Nome completo" />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md" placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="phone" className="sr-only">Telefone</label>
                    <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md" placeholder="Telefone" />
                </div>
                <div>
                    <label htmlFor="subject" className="sr-only">Assunto</label>
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md" placeholder="Assunto" />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Mensagem</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md" placeholder="Mensagem"></textarea>
                </div>
                <div>
                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-gray-400">
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </div>
                </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;