import '../tech-theme.css';
import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import { COLORS, GRADIENTS, COMPANY_INFO } from '../lib/constants';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/error
    const success = Math.random() > 0.2; // 80% success rate
    if (success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: GRADIENTS.background }}>
      <Navbar />
      
      {/* Banner Secundário */}
      <section className="relative" style={{ background: GRADIENTS.secondary }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("/assets/circuit-pattern.png")',
          backgroundSize: 'cover',
          opacity: 0.1
        }}></div>
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl font-bold font-heading mb-4 text-white">
            Entre em <span className="text-[#00FFCC]" style={{ textShadow: '0 0 15px rgba(0, 255, 204, 0.7)' }}>Contato</span>
          </h1>
        </div>
      </section>

      {/* Formulário e Informações de Contato */}
      <section className="py-16" style={{ background: COLORS.backgroundSecondary }}>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-col md:flex-row gap-12">
            {/* Formulário de Contato */}
            {/* <div className="md:w-2/3">
              <h2 className="text-3xl font-bold font-heading text-white mb-4">
                Envie sua <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Mensagem</span>
              </h2>
              <div className="w-20 h-1 bg-[#00FFCC] mb-6" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#00FFCC] mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-[#00FFCC30] bg-[rgba(18,18,18,0.8)] text-white focus:border-[#00FFCC] focus:ring-2 focus:ring-[#00FFCC50] outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#00FFCC] mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-[#00FFCC30] bg-[rgba(18,18,18,0.8)] text-white focus:border-[#00FFCC] focus:ring-2 focus:ring-[#00FFCC50] outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#00FFCC] mb-1">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-[#00FFCC30] bg-[rgba(18,18,18,0.8)] text-white focus:border-[#00FFCC] focus:ring-2 focus:ring-[#00FFCC50] outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#00FFCC] mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-[#00FFCC30] bg-[rgba(18,18,18,0.8)] text-white focus:border-[#00FFCC] focus:ring-2 focus:ring-[#00FFCC50] outline-none transition-all duration-300"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-[#00FFCC] mt-4">Mensagem enviada com sucesso!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-[#FF3366] mt-4">Erro ao enviar mensagem. Tente novamente.</p>
                )}
              </form>
            </div> */}

            {/* Mapa (Placeholder) */}
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold font-heading text-white mb-4">
                Nossa <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Localização</span>
              </h3>
              <div className="h-[500px] rounded-lg border border-[#00FFCC30] bg-[rgba(18,18,18,0.8)] overflow-hidden">
                <iframe
                  title="Google Maps"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7430810335727!2d-49.308490324751546!3d-16.73966624694113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1e455b18a53%3A0xf173be5711132a17!2sAltis%20Prote%C3%A7%C3%A3o%20Veicular%20e%20Benef%C3%ADcios%20Em%20Goi%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1749051927069!5m2!1spt-BR!2sbr"
                ></iframe>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold font-heading text-white mb-4">
                Informações de <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Contato</span>
              </h2>
              <div className="w-20 h-1 bg-[#00FFCC] mb-6" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[#00FFCC] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Endereço</h4>
                    <p className="text-gray-300">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[#00FFCC] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Telefone</h4>
                    <p className="text-gray-300">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[#00FFCC] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Email</h4>
                    <p className="text-gray-300">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: COLORS.background }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-white mb-4">
            Perguntas <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Frequentes</span>
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <details className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg border border-[#00FFCC30] overflow-hidden group">
              <summary className="flex justify-between items-center p-4 cursor-pointer text-white font-medium group-hover:text-[#00FFCC] transition-colors">
                Como funciona o rastreamento veicular?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 border-t border-[#00FFCC30] text-gray-300">
                Utilizamos tecnologia GPS para localizar seu veículo em tempo real. Os dados são transmitidos para nossa plataforma, onde você pode acessá-los via aplicativo ou web.
              </div>
            </details>
            
            {/* FAQ Item 2 */}
            <details className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg border border-[#00FFCC30] overflow-hidden group">
              <summary className="flex justify-between items-center p-4 cursor-pointer text-white font-medium group-hover:text-[#00FFCC] transition-colors">
                É possível instalar o rastreador em qualquer veículo?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 border-t border-[#00FFCC30] text-gray-300">
                Sim, nossos rastreadores são compatíveis com a maioria dos veículos, incluindo carros, motos, caminhões e ônibus. Consulte nossa equipe para verificar a compatibilidade específica.
              </div>
            </details>
            
            {/* FAQ Item 3 */}
            <details className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg border border-[#00FFCC30] overflow-hidden group">
              <summary className="flex justify-between items-center p-4 cursor-pointer text-white font-medium group-hover:text-[#00FFCC] transition-colors">
                O que acontece em caso de roubo ou furto?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-4 border-t border-[#00FFCC30] text-gray-300">
                Em caso de roubo ou furto, você deve entrar em contato imediatamente com nossa central de monitoramento 24h. Nossa equipe auxiliará na localização e recuperação do veículo junto às autoridades competentes.
              </div>
            </details>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
