import '../tech-theme.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import { COMPANY_INFO } from '../lib/constants';
import VideoBackground from '@/components/ui/VideoBackground';
import TechnologyCard from '@/components/ui/TechnologyCard';
import DepoimentCard from '@/components/ui/DepoimentCard';

export const Home = () => {

  // Lista de imagens para o carrossel
  // const bannerImages = [
  //   '/assets/banner_image_1.webp',
  //   '/assets/banner_image_2.webp',
  //   '/assets/banner_image_3.webp'
  // ];

  const navigate = useNavigate();

  const directWhatsapp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsapp.fone}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`;
    window.open(url, "_blank");
  }

  const goNavigation = () => {
    navigate('/produtos');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-background)' }}>
      <Navbar />

      {/* Banner Principal */}
      <section className="relative text-[var(--text-light)]">
        <VideoBackground src="/assets/video.mp4" />

        {/* Overlay escuro para melhorar a legibilidade do texto */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        {/* Grade tecnológica sobreposta ao video */}
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url('/assets/tech-grid.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        ></div>

        {/* Elementos decorativos */}
        <div className="tech-circle absolute w-64 h-64 top-20 left-20" style={{ background: 'rgba(0, 255, 204, 0.1)' }}></div>
        <div className="tech-circle absolute w-96 h-96 bottom-10 right-10" style={{ background: 'rgba(61, 0, 153, 0.1)' }}></div>

        <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-start justify-center min-h-[500px]">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 max-w-2xl">
            <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Rastreamento</span> inteligente
            <span className="block" style={{ textShadow: 'var(--neon-glow)' }}>moderno e eficiente</span>
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Soluções inteligentes em rastreamento com tecnologia de ponta, segurança e total confiabilidade.
          </p>
          <Button variant="primary" size="large">
            Conheça Nossos Produtos
          </Button>
        </div>
      </section>

      {/* Tecnologias de Rastreamento */}
      <section className="py-16 bg-[var(--background-secondary)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-[var(--text-light)] mb-4">
            Tecnologias de <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Rastreamento</span>
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-left" data-aos-delay="100">
            {/* Card 1 */}
            <TechnologyCard
              titulo="GPS Avançado"
              descricao="Localização precisa em tempo real com tecnologia GPS de última geração, garantindo monitoramento contínuo."
              link="/produtos"
              icone={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              }
            />

            {/* Card 2 */}
            <TechnologyCard
              titulo="Aplicativo Mobile"
              descricao="Controle total na palma da sua mão com nosso aplicativo intuitivo para iOS e Android, com alertas em tempo real."
              link="/produtos"
              icone={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              }
            />

            {/* Card 3 */}
            <TechnologyCard
              titulo="Bloqueio Remoto"
              descricao="Segurança adicional com capacidade de bloqueio remoto do veículo em caso de roubo ou uso não autorizado."
              link="/produtos"
              icone={
                <svg
                  className="w-8 h-8"
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
          </div>
        </div>
      </section>

      {/* Por que escolher nosso rastreamento */}
      <section className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4" data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-3xl font-bold font-heading text-center text-[var(--text-light)] mb-4">
            Por Que <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Escolher</span> Nosso Rastreamento?
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefício 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4 text-[var(--text-dark)]" style={{ boxShadow: 'var(--neon-glow)' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Monitoramento 24/7</h3>
              <p className="text-[var(--text-light-secondary)]">
                Acompanhamento contínuo do seu veículo, 24 horas por dia, 7 dias por semana, garantindo segurança total.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4 text-[var(--text-dark)]" style={{ boxShadow: 'var(--neon-glow)' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Resposta Rápida</h3>
              <p className="text-[var(--text-light-secondary)]">
                Alertas instantâneos e equipe de suporte pronta para agir rapidamente em caso de emergências.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4 text-[var(--text-dark)]" style={{ boxShadow: 'var(--neon-glow)' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>Custo-Benefício</h3>
              <p className="text-[var(--text-light-secondary)]">
                Planos acessíveis com excelente relação custo-benefício, adaptados às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produto em Destaque */}
      <section className="py-16 bg-[var(--background-secondary)]">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden border border-[var(--border-color)]" style={{ boxShadow: 'var(--neon-glow)' }} data-aos="fade-left" data-aos-delay="100">
            <div className="md:flex">
              <div className="md:w-1/2" style={{ background: 'var(--gradient-secondary)' }}>
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-[var(--text-light)] text-center md:text-left">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--text-light)]">Rastreador <span className="text-[var(--primary)]">Premium</span></h3>
                    <p className="mb-6">
                      Nossa solução mais completa para rastreamento veicular, com tecnologia de ponta e funcionalidades avançadas para máxima segurança.
                    </p>
                    <ul className="mb-8 space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        GPS de alta precisão
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Bloqueio remoto do veículo
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Alertas de velocidade e cercas virtuais
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Histórico de rotas por 90 dias
                      </li>
                    </ul>
                    <Button variant="primary">Ver Detalhes</Button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-[var(background-secondary)]">
                <div className="h-64 md:h-full flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 z-0" style={{
                    background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.1) 0%, transparent 70%)',
                    backgroundSize: '150% 150%',
                    animation: 'pulse 3s infinite ease-in-out'
                  }}></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center">
                      <svg className="w-16 h-16 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <p className="text-[var(--primary)]">Rastreador Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4" data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-3xl font-bold font-heading text-center text-[var(--text-light)] mb-4">
            O Que Nossos <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)'}}>Clientes</span> Dizem
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <DepoimentCard
              name="Carlos Silva"
              profession="Motorista de Aplicativo"
              comment="Desde que instalei o rastreador da RastreAuto, me sinto muito mais seguro durante meu trabalho. O aplicativo é muito fácil de usar e o suporte é excelente."
            />

            {/* Depoimento 2 */}
            <DepoimentCard
              name="Carlos Silva"
              profession="Motorista de Aplicativo"
              comment="Desde que instalei o rastreador da RastreAuto, me sinto muito mais seguro durante meu trabalho. O aplicativo é muito fácil de usar e o suporte é excelente."
            />
            
            {/* Depoimento 3 */}
            <DepoimentCard
              name="Carlos Silva"
              profession="Motorista de Aplicativo"
              comment="Desde que instalei o rastreador da RastreAuto, me sinto muito mais seguro durante meu trabalho. O aplicativo é muito fácil de usar e o suporte é excelente."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Depoimento 4 */}
            <DepoimentCard
              name="Carlos Silva"
              profession="Motorista de Aplicativo"
              comment="Desde que instalei o rastreador da RastreAuto, me sinto muito mais seguro durante meu trabalho. O aplicativo é muito fácil de usar e o suporte é excelente."
            />
  
            {/* Depoimento 5 */}
            <DepoimentCard
              name="Carlos Silva"
              profession="Motorista de Aplicativo"
              comment="Desde que instalei o rastreador da RastreAuto, me sinto muito mais seguro durante meu trabalho. O aplicativo é muito fácil de usar e o suporte é excelente."
            />

            {/* Depoimento 6 */}
            <DepoimentCard
              name="Carlos Silva"
              profession="Motorista de Aplicativo"
              comment="Desde que instalei o rastreador da RastreAuto, me sinto muito mais seguro durante meu trabalho. O aplicativo é muito fácil de usar e o suporte é excelente."
            />  
            
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("/assets/circuit-pattern.png")',
          backgroundSize: 'cover',
          opacity: 0.1
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-3xl font-bold font-heading mb-6 text-[var(--text-light)]">
            Proteja seu veículo <span className="text-[var(--text-dark)]">agora mesmo</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[var(--text-light)">
            Não deixe para depois. Garanta a segurança do seu veículo com as melhores soluções de rastreamento do mercado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" onClick={directWhatsapp}>Fale Conosco</Button>
            <Button variant="secondary" onClick={goNavigation}>Ver Produtos</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
