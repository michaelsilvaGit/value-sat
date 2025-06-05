import '../tech-theme.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { COMPANY_INFO } from '../lib/constants';
import Button from '@/components/ui/Button';
import FaqCard from '@/components/ui/FaqCard';

export const Contact = () => {

  const directWhatsapp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsapp.fone}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`;
    window.open(url, "_blank");
  }

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   // Simulate API call
  //   await new Promise(resolve => setTimeout(resolve, 1500));

  //   // Simulate success/error
  //   const success = Math.random() > 0.2; // 80% success rate
  //   if (success) {
  //     setSubmitStatus('success');
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   } else {
  //     setSubmitStatus('error');
  //   }

  //   setIsSubmitting(false);
  // };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-background)' }}>
      <Navbar />

      {/* Banner Secundário */}
      <section className="relative" style={{ background: 'var(--gradient-secondary)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("/assets/circuit-pattern.png")',
          backgroundSize: 'cover',
          opacity: 0.1
        }}></div>
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl font-bold font-heading mb-4 text-[var(--text-light)]">
            Entre em <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Contato</span>
          </h1>
        </div>
      </section>

      {/* Formulário e Informações de Contato */}
      <section className="py-16" style={{ background: 'var(--background-secondary)' }}>
        <div className="container mx-auto px-4" data-aos="fade-left" data-aos-delay="100">
          <div className="items-center flex flex-col md:flex-row gap-12">

            {/* Formulário de Contato */}
            {/* <div className="md:w-2/3">
              <h2 className="text-3xl font-bold font-heading text-[var(--text-light)] mb-4">
                Envie sua <span className="text-[var(--primary)]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Mensagem</span>
              </h2>
              <div className="w-20 h-1 bg-[var(--primary)] mb-6" style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--primary)] mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-[var(--border-color)] bg-[rgba(18,18,18,0.8)] text-[var(--text-light)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--border-color)] outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--primary)] mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-[var(--border-color)] bg-[rgba(18,18,18,0.8)] text-[var(--text-light)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--border-color)] outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--primary)] mb-1">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-[var(--border-color)] bg-[rgba(18,18,18,0.8)] text-[var(--text-light)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--border-color)] outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--primary)] mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-[var(--border-color)] bg-[rgba(18,18,18,0.8)] text-[var(--text-light)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--border-color)] outline-none transition-all duration-300"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-[var(--primary)] mt-4">Mensagem enviada com sucesso!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-[#FF3366] mt-4">Erro ao enviar mensagem. Tente novamente.</p>
                )}
              </form>
            </div> */}

            {/* Mapa (Placeholder) */}
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold font-heading text-[var(--text-light)] mb-4">
                Nossa <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Localização</span>
              </h3>
              <div className="h-[500px] rounded-lg border border-[var(--border-color)] bg-[rgba(18,18,18,0.8)] overflow-hidden">
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
              <h2 className="text-3xl font-bold font-heading text-[var(--text-light)] mb-4">
                Informações de <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Contato</span>
              </h2>
              <div className="w-20 h-1 bg-[var(--primary)] mb-6" style={{ boxShadow: 'var(--box-shadow)' }}></div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Endereço</h4>
                    <p className="text-[var(--text-light-secondary)]">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Telefone</h4>
                    <p className="text-[var(--text-light-secondary)]">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-[var(--primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Email</h4>
                    <p className="text-[var(--text-light-secondary)]">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>
              <div className="mt-11 text-center sm:flex-row gap-4">
                <Button variant="primary" onClick={directWhatsapp}>
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: 'var(--background)'}}>
        <div className="container mx-auto px-4" data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-3xl font-bold font-heading text-center text-[var(--text-light)] mb-4">
            Perguntas <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Frequentes</span>
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <FaqCard
              question="Como funciona o rastreamento veicular?"
              answer="Utilizamos tecnologia GPS para localizar seu veículo em tempo real. Os dados são transmitidos para nossa plataforma, onde você pode acessá-los via aplicativo ou web."
            />

            {/* FAQ Item 2 */}
            <FaqCard
              question="É possível instalar o rastreador em qualquer veículo?"
              answer="Sim, nossos rastreadores são compatíveis com a maioria dos veículos, incluindo carros, motos, caminhões e ônibus. Consulte nossa equipe para verificar a compatibilidade específica."
            />
        
            {/* FAQ Item 3 */}
            <FaqCard
              question="O que acontece em caso de roubo ou furto?"
              answer="Em caso de roubo ou furto, você deve entrar em contato imediatamente com nossa central de monitoramento 24h. Nossa equipe auxiliará na localização e recuperação do veículo junto às autoridades competentes."
            />
          </div>
        </div>
      </section>

      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp.fone}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`}   
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <svg
          style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.7)'}}
          className="w-16 h-16 text-[var(--text-light)] bg-[var(--primary)] rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 animate-bounce "
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M16.001 2.984C8.276 2.984 2 9.26 2 16.983c0 2.92.862 5.625 2.328 7.922L2 30l5.297-2.305A13.956 13.956 0 0016 30c7.725 0 14-6.275 14-13.998S23.725 2.984 16.001 2.984zm0 25.6a11.547 11.547 0 01-6.23-1.797l-.445-.277-3.136 1.362.668-3.07-.203-.476A11.417 11.417 0 014.6 16.983c0-6.327 5.074-11.4 11.4-11.4s11.4 5.073 11.4 11.4c0 6.326-5.074 11.4-11.4 11.4zm6.41-8.457c-.35-.175-2.063-1.02-2.383-1.137-.319-.118-.551-.175-.782.175-.233.35-.895 1.138-1.097 1.375-.2.237-.4.263-.75.088-.35-.176-1.478-.544-2.812-1.734-1.038-.926-1.738-2.068-1.942-2.418-.2-.35-.022-.538.152-.713.155-.154.35-.4.526-.6.175-.2.233-.35.35-.583.118-.233.06-.438-.03-.613-.088-.175-.788-1.9-1.08-2.606-.284-.684-.573-.59-.782-.6l-.664-.01c-.232 0-.609.088-.927.438s-1.22 1.19-1.22 2.907c0 1.718 1.248 3.374 1.422 3.605.175.233 2.46 3.75 5.962 5.257.834.36 1.484.574 1.99.733.837.267 1.6.229 2.203.139.672-.1 2.063-.844 2.355-1.66.291-.816.291-1.517.203-1.66-.087-.145-.319-.233-.668-.408z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default Contact;
