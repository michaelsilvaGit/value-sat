import '../tech-theme.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import { COMPANY_INFO } from '../lib/constants';


export const Products = () => {

  const directWhatsapp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsapp.fone}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`;
    window.open(url, "_blank");
  }

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
          Nosso <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Produto</span>
          </h1>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--background)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Imagem do Produto */}
            <div className="w-full lg:w-1/2">
              <div className="card rounded-lg ">
                <div className="h-96 relative overflow-hidden">
                  <div className="absolute inset-0 z-0" style={{ 
                    background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.2) 0%, rgba(61, 0, 153, 0.2) 100%)',
                    backgroundSize: '150% 150%',
                    animation: 'pulse 3s infinite ease-in-out'
                  }}></div>
                  <div className="relative h-full flex items-center justify-center z-10">
                    <img 
                      src="/assets/rastreador3.png" 
                      alt="Rastreador Premium Value Sat" 
                      className="max-h-full max-w-full object-contain p-8"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/tech-grid.png';
                        e.currentTarget.className = "max-h-full max-w-full object-cover opacity-50";
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Galeria de Miniaturas */}
              {/* <div className="flex justify-center gap-4 mt-4">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item} 
                    className="w-20 h-20 bg-[var(--background-secondary)] backdrop-blur-md rounded-md shadow-md overflow-hidden border border-[var(--border-color)] hover:border-[#00FFCC] cursor-pointer transition-all duration-300"
                  >
                    <div className="h-full flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#00FFCC20] border border-[#00FFCC50] flex items-center justify-center">
                        <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
            
            {/* Detalhes do Produto */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold font-heading mb-4 text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow-text)' }}>
                Rastreador Premium
              </h2>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[var(--text-price)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-[var(--text-light-secondary)] ml-2">(42 avaliações)</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-[var(--primary)] mr-2" style={{ textShadow: 'var(--neon-glow-text)' }}>A partir</span>
                  <span className="text-[var(--text-price)] font-bold text-3xl" style={{ textShadow: 'var(--text-price-neon)' }}>R$ 39,00</span>
                </div>
              </div>
              
              <div className="mb-8 text-[var(--text-light-secondary)]">
                <p className="mb-4">
                  O Rastreador Premium Value Sat oferece recursos avançados como Bloqueio remoto, Cercas virtuais, Histórico de rotas por 90 dias, Detecção de comportamentos, Acelerômetro e giroscópio integrados monitoram:
                  acelerações fortes, frenagens bruscas, curvas agressivas, excesso de velocidade. Alertas e sensores diversos, Alarmes configuráveis: velocidade excedida, ignição ligada/desligada,
                  violação de cerca virtual, bateria baixa.
                </p>
                <p>
                  Nossa solução mais completa para rastreamento, com tecnologia de ponta para garantir a segurança e monitoramento do seu veículo em tempo real, 24 horas por dia, 7 dias por semana.
                </p>
              </div>
              
              {/* Características */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold font-heading mb-4 text-[var(--text-light)]">Características:</h3>
                <ul className="space-y-3">
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
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Detecção de comportamentos
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Robustez e certificações
                      </li>
                </ul>
              </div>
              
              {/* Botão de Ação */}
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" onClick={directWhatsapp} size="large">Fale Conosco</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificações Técnicas */}
      <section className="py-16" style={{ background: 'var(--background-secondary)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-[var(--text-light)] mb-4">
            Especificações <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Técnicas</span>
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>
          
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg border border-[var(--border-color)]" style={{ boxShadow: 'var(--neon-glow)' }}>
              <tbody>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'rgba(30, 30, 47, 0.7)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Dimensões</td>
                  <td className="py-4 px-6 text-[var(--text-light-secondary)]">85mm x 45mm x 15mm</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'rgba(30, 30, 47, 0.5)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Peso</td>
                  <td className="py-4 px-6 text-[var(--text-light-secondary)]">75g</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'rgba(30, 30, 47, 0.7)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Bateria</td>
                  <td className="py-4 px-6 text-[var(--text-light-secondary)]">Bateria 1.200 mAh a 4.500 mAh</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'rgba(30, 30, 47, 0.5)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Conectividade</td>
                  <td className="py-4 px-6 text-[var(--text-light-secondary)]">4G LTE / GSM / GNSS / BDS/Glonass</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'rgba(30, 30, 47, 0.7)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Precisão GPS</td>
                  <td className="py-4 px-6 text-[var(--text-light-secondary)]">Até 2 a 10 metros</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'rgba(30, 30, 47, 0.5)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Resistência</td>
                  <td className="py-4 px-6 text-[var(--text-light-secondary)]">IP67 (resistente à água e poeira)</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'rgba(30, 30, 47, 0.7)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Temperatura de Operação</td>
                  <td className="py-4 px-6 text-[var(--text-light-secondary)]">– 20°C até 70°C</td>
                </tr>
                <tr style={{ background: 'rgba(30, 30, 47, 0.5)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Update</td>
                  <td className="py-4 px-6 text-[var(--text-light-secondary)]">Atualizações de firmware via rede (OTA)</td>
                </tr>
              </tbody>
            </table>
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
          <h2 className="text-3xl font-bold font-heading text-[--text-light] mb-6">
            Dúvidas sobre nossos <span className="text-[var(--text-dark)]">produtos</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[--text-light]">
            Nossa equipe está pronta para ajudar você a escolher a melhor solução para suas necessidades.
          </p>
          <Button variant="primary" onClick={directWhatsapp}>Fale Conosco</Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
