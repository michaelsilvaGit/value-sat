import '../tech-theme.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import ValueCard from '@/components/ui/ValueCard';

export const About = () => {

  const navigate = useNavigate();

  const goNavigation = () => {
    navigate('/produtos');
  };

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
            Sobre Nossa <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Empresa</span>
          </h1>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16" style={{ background: 'var(--background-secondary)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12" data-aos="fade-left" data-aos-delay="100">
            <div className="md:w-1/2">
              <div className="h-64 md:h-96 rounded-lg flex items-center justify-center relative overflow-hidden border border-[var(--border-color)]" style={{ background: 'var(--background-secondary)' }}>
                <div className="absolute inset-0" style={{ 
                  background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.1) 0%, transparent 70%)',
                  backgroundSize: '150% 150%',
                  animation: 'pulse 3s infinite ease-in-out'
                }}></div>
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center">
                    <svg className="w-16 h-16 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                  </div>
                  <p className="text-[var(--primary)]">Imagem da empresa</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-heading text-[var(--text-light)] mb-4">
                Quem <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Somos</span>
              </h2>
              <div className="w-20 h-1 bg-[var(--primary)] mb-6" style={{ boxShadow: 'var(--box-shadow)' }}></div>
              <p className="text-[var(--text-light-secondary)] mb-4">
                A RastreAuto é uma empresa especializada em soluções de rastreamento veicular, 
                fundada com o objetivo de proporcionar mais segurança e tranquilidade para proprietários 
                de veículos e gestores de frotas.
              </p>
              <p className="text-[var(--text-light-secondary)] mb-4">
                Com anos de experiência no mercado, desenvolvemos tecnologias avançadas que permitem 
                o monitoramento em tempo real, garantindo a localização precisa e a recuperação 
                eficiente em casos de roubo ou furto.
              </p>
              <p className="text-[var(--text-light-secondary)]">
                Nossa missão é oferecer soluções inovadoras e acessíveis que transformem a maneira 
                como as pessoas protegem seus veículos, utilizando o que há de mais moderno em 
                tecnologia de rastreamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16" style={{ background: 'var(--background)' }}>
        <div className="container mx-auto px-4" data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-3xl font-bold font-heading text-center text-[var(--text-light)] mb-4">
            Nossos <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Valores</span>
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Valor 1 */}
            <ValueCard
              title="Segurança"
              description="Priorizamos a segurança em tudo o que fazemos, desde o desenvolvimento de nossos produtos até o atendimento ao cliente, garantindo a proteção dos veículos e dados."
              icon={
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
            />
            
            {/* Valor 2 */}

            <ValueCard
              title="Inovação"
              description="Buscamos constantemente novas tecnologias e soluções para melhorar nossos produtos 
                  e serviços, mantendo-nos na vanguarda do setor de rastreamento veicular."
              icon={
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
            />
            
            {/* Valor 3 */}

            <ValueCard
              title="Compromisso"
              description="Estamos comprometidos com a satisfação de nossos clientes, oferecendo suporte 
              de qualidade e soluções personalizadas para atender às suas necessidades específicas."
              icon={
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16" style={{ background: 'var(--background-secondary)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12" data-aos="fade-left" data-aos-delay="100">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-heading text-[var(--text-light)] mb-4">
                Nossos <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Diferenciais</span>
              </h2>
              <div className="w-20 h-1 bg-[var(--primary)] mb-6" style={{ boxShadow: 'var(--box-shadow)' }}></div>
              <p className="text-[var(--text-light-secondary)] mb-6">
                Na RastreAuto, nos destacamos pela excelência em cada aspecto do nosso serviço, 
                desde a tecnologia utilizada até o atendimento ao cliente.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-[var(--primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Tecnologia de ponta</h4>
                    <p className="text-[var(--text-light-secondary)]">Utilizamos os mais avançados sistemas de rastreamento GPS e comunicação.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-[var(--primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Suporte 24/7</h4>
                    <p className="text-[var(--text-light-secondary)]">Equipe disponível 24 horas por dia, 7 dias por semana para atendimento.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-[var(--primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Aplicativo intuitivo</h4>
                    <p className="text-[var(--text-light-secondary)]">Interface amigável e fácil de usar, com todas as funcionalidades necessárias.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-[var(--primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Alta taxa de recuperação</h4>
                    <p className="text-[var(--text-light-secondary)]">Mais de 95% de sucesso na recuperação de veículos roubados ou furtados.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="h-64 md:h-96 rounded-lg flex items-center justify-center relative overflow-hidden border border-[var(--border-color)]" style={{ background: 'var(--background-secondary)' }}>
                <div className="absolute inset-0" style={{ 
                  background: 'radial-gradient(circle at center, rgba(61, 0, 153, 0.2) 0%, transparent 70%)',
                  backgroundSize: '150% 150%',
                  animation: 'pulse 3s infinite ease-in-out'
                }}></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-24 h-24 rounded-lg bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center">
                      <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="w-24 h-24 rounded-lg bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center">
                      <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="w-24 h-24 rounded-lg bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center">
                      <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="w-24 h-24 rounded-lg bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center">
                      <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("/assets/circuit-pattern.png")',
          backgroundSize: 'cover',
          opacity: 0.1
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-3xl font-bold font-heading mb-6 text-[var(--text-light)]">
            Conheça nossos <span className="text-[var(--text-dark)]">produtos</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[var(--text-light)]">
            Descubra as soluções de rastreamento que melhor se adaptam às suas necessidades.
          </p>
          <Button variant="primary" onClick={goNavigation}>Ver Produtos</Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
