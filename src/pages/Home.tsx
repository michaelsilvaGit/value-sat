import '../tech-theme.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import { COLORS, GRADIENTS } from '../lib/constants';
import VideoBackground from '@/components/ui/ImageCarousel';

export const Home = () => {

  // Lista de imagens para o carrossel
  const bannerImages = [
    '/assets/banner_image_1.webp',
    '/assets/banner_image_2.webp',
    '/assets/banner_image_3.webp'
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: GRADIENTS.background }}>
      <Navbar />

      {/* Banner Principal */}
      <section className="relative text-white">
        {/* Carrossel de imagens */}
        <VideoBackground src="/assets/video.mp4" />

        {/* Overlay escuro para melhorar a legibilidade do texto */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        {/* Grade tecnológica sobreposta às imagens */}
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
            <span className="text-[#00FFCC]" style={{ textShadow: '0 0 15px rgba(0, 255, 204, 0.7)' }}>Rastreamento</span> inteligente
            <span className="block">moderno e eficiente</span>
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
      <section className="py-16" style={{ background: COLORS.backgroundSecondary }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-white mb-4">
            Tecnologias de <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Rastreamento</span>
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#00FFCC] rounded-full flex items-center justify-center mb-4 text-[#121212]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>GPS Avançado</h3>
                <p className="text-gray-300 mb-4">
                  Localização precisa em tempo real com tecnologia GPS de última geração, garantindo monitoramento contínuo.
                </p>
                <a href="/produtos" className="text-[#00FFCC] font-medium hover:text-white transition-colors underline">
                  Saiba mais
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#00FFCC] rounded-full flex items-center justify-center mb-4 text-[#121212]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Aplicativo Mobile</h3>
                <p className="text-gray-300 mb-4">
                  Controle total na palma da sua mão com nosso aplicativo intuitivo para iOS e Android, com alertas em tempo real.
                </p>
                <a href="/produtos" className="text-[#00FFCC] font-medium hover:text-white transition-colors underline">
                  Saiba mais
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#00FFCC] rounded-full flex items-center justify-center mb-4 text-[#121212]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Bloqueio Remoto</h3>
                <p className="text-gray-300 mb-4">
                  Segurança adicional com capacidade de bloqueio remoto do veículo em caso de roubo ou uso não autorizado.
                </p>
                <a href="/produtos" className="text-[#00FFCC] font-medium hover:text-white transition-colors underline">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher nosso rastreamento */}
      <section className="py-16" style={{ background: COLORS.background }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-white mb-4">
            Por Que <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Escolher</span> Nosso Rastreamento?
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefício 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#00FFCC] rounded-full flex items-center justify-center mb-4 text-[#121212] shadow-[0_0_15px_rgba(0,255,204,0.7)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Monitoramento 24/7</h3>
              <p className="text-gray-300">
                Acompanhamento contínuo do seu veículo, 24 horas por dia, 7 dias por semana, garantindo segurança total.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#00FFCC] rounded-full flex items-center justify-center mb-4 text-[#121212] shadow-[0_0_15px_rgba(0,255,204,0.7)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Resposta Rápida</h3>
              <p className="text-gray-300">
                Alertas instantâneos e equipe de suporte pronta para agir rapidamente em caso de emergências.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#00FFCC] rounded-full flex items-center justify-center mb-4 text-[#121212] shadow-[0_0_15px_rgba(0,255,204,0.7)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Custo-Benefício</h3>
              <p className="text-gray-300">
                Planos acessíveis com excelente relação custo-benefício, adaptados às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produto em Destaque */}
      <section className="py-16" style={{ background: COLORS.backgroundSecondary }}>
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden border border-[#00FFCC30] shadow-[0_0_20px_rgba(0,255,204,0.3)]">
            <div className="md:flex">
              <div className="md:w-1/2" style={{ background: GRADIENTS.secondary }}>
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-white text-center md:text-left">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-white">Rastreador <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Premium</span></h3>
                    <p className="mb-6">
                      Nossa solução mais completa para rastreamento veicular, com tecnologia de ponta e funcionalidades avançadas para máxima segurança.
                    </p>
                    <ul className="mb-8 space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#00FFCC]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        GPS de alta precisão
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#00FFCC]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Bloqueio remoto do veículo
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#00FFCC]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Alertas de velocidade e cercas virtuais
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#00FFCC]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Histórico de rotas por 90 dias
                      </li>
                    </ul>
                    <Button variant="primary">Ver Detalhes</Button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-[#1E1E2F]">
                <div className="h-64 md:h-full flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 z-0" style={{
                    background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.1) 0%, transparent 70%)',
                    backgroundSize: '150% 150%',
                    animation: 'pulse 3s infinite ease-in-out'
                  }}></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#00FFCC20] border border-[#00FFCC50] flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#00FFCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <p className="text-[#00FFCC]">Rastreador Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16" style={{ background: COLORS.background }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-white mb-4">
            O Que Nossos <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Clientes</span> Dizem
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md p-6 border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3D0099] rounded-full mr-4 flex items-center justify-center text-[#00FFCC] font-bold">CS</div>
                <div>
                  <h4 className="font-semibold text-white">Carlos Silva</h4>
                  <p className="text-sm text-[#00FFCC]">Motorista de Aplicativo</p>
                </div>
              </div>
              <div className="mb-4 text-[#00FFCC] text-4xl" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>"</div>
              <p className="text-gray-300 italic mb-4">
                Desde que instalei o rastreador da RastreAuto, me sinto muito mais seguro durante meu trabalho. O aplicativo é muito fácil de usar e o suporte é excelente.
              </p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md p-6 border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3D0099] rounded-full mr-4 flex items-center justify-center text-[#00FFCC] font-bold">AO</div>
                <div>
                  <h4 className="font-semibold text-white">Ana Oliveira</h4>
                  <p className="text-sm text-[#00FFCC]">Proprietária de Veículo</p>
                </div>
              </div>
              <div className="mb-4 text-[#00FFCC] text-4xl" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>"</div>
              <p className="text-gray-300 italic mb-4">
                Meu carro foi roubado e graças ao rastreador da RastreAuto, foi recuperado em menos de 24 horas. Um investimento que realmente vale a pena!
              </p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md p-6 border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3D0099] rounded-full mr-4 flex items-center justify-center text-[#00FFCC] font-bold">RM</div>
                <div>
                  <h4 className="font-semibold text-white">Roberto Mendes</h4>
                  <p className="text-sm text-[#00FFCC]">Gestor de Frota</p>
                </div>
              </div>
              <div className="mb-4 text-[#00FFCC] text-4xl" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>"</div>
              <p className="text-gray-300 italic mb-4">
                Gerencio uma frota de 15 veículos e o sistema da RastreAuto facilitou muito meu trabalho. Consigo monitorar todos os veículos em tempo real e otimizar rotas.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Depoimento 4 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md p-6 border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3D0099] rounded-full mr-4 flex items-center justify-center text-[#00FFCC] font-bold">CS</div>
                <div>
                  <h4 className="font-semibold text-white">Carlos Silva</h4>
                  <p className="text-sm text-[#00FFCC]">Motorista de Aplicativo</p>
                </div>
              </div>
              <div className="mb-4 text-[#00FFCC] text-4xl" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>"</div>
              <p className="text-gray-300 italic mb-4">
                Desde que instalei o rastreador da RastreAuto, me sinto muito mais seguro durante meu trabalho. O aplicativo é muito fácil de usar e o suporte é excelente.
              </p>
            </div>

            {/* Depoimento 5 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md p-6 border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3D0099] rounded-full mr-4 flex items-center justify-center text-[#00FFCC] font-bold">AO</div>
                <div>
                  <h4 className="font-semibold text-white">Ana Oliveira</h4>
                  <p className="text-sm text-[#00FFCC]">Proprietária de Veículo</p>
                </div>
              </div>
              <div className="mb-4 text-[#00FFCC] text-4xl" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>"</div>
              <p className="text-gray-300 italic mb-4">
                Meu carro foi roubado e graças ao rastreador da RastreAuto, foi recuperado em menos de 24 horas. Um investimento que realmente vale a pena!
              </p>
            </div>

            {/* Depoimento 6 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md p-6 border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#3D0099] rounded-full mr-4 flex items-center justify-center text-[#00FFCC] font-bold">RM</div>
                <div>
                  <h4 className="font-semibold text-white">Roberto Mendes</h4>
                  <p className="text-sm text-[#00FFCC]">Gestor de Frota</p>
                </div>
              </div>
              <div className="mb-4 text-[#00FFCC] text-4xl" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>"</div>
              <p className="text-gray-300 italic mb-4">
                Gerencio uma frota de 15 veículos e o sistema da RastreAuto facilitou muito meu trabalho. Consigo monitorar todos os veículos em tempo real e otimizar rotas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 relative overflow-hidden" style={{ background: GRADIENTS.primary }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("/assets/circuit-pattern.png")',
          backgroundSize: 'cover',
          opacity: 0.1
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold font-heading mb-6 text-white">
            Proteja seu veículo <span className="text-[#121212]">agora mesmo</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Não deixe para depois. Garanta a segurança do seu veículo com as melhores soluções de rastreamento do mercado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary">Fale Conosco</Button>
            <Button variant="secondary">Ver Produtos</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
