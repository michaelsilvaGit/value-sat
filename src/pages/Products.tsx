import '../tech-theme.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import { COLORS, GRADIENTS } from '../lib/constants';

export const Products = () => {
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
            Nossos <span className="text-[#00FFCC]" style={{ textShadow: '0 0 15px rgba(0, 255, 204, 0.7)' }}>Produtos</span>
          </h1>
        </div>
      </section>

      {/* Filtros de Produtos */}
      <section className="py-8 border-b border-[#00FFCC30]" style={{ background: COLORS.backgroundSecondary }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#00FFCC] text-[#121212] px-4 py-2 rounded-md font-medium shadow-[0_0_15px_rgba(0,255,204,0.7)]">
              Todos
            </button>
            <button className="border-2 border-[#00FFCC] text-[#00FFCC] px-4 py-2 rounded-md font-medium hover:bg-[#00FFCC20] transition-colors duration-300">
              Rastreadores
            </button>
            <button className="border-2 border-[#00FFCC] text-[#00FFCC] px-4 py-2 rounded-md font-medium hover:bg-[#00FFCC20] transition-colors duration-300">
              Acessórios
            </button>
            <button className="border-2 border-[#00FFCC] text-[#00FFCC] px-4 py-2 rounded-md font-medium hover:bg-[#00FFCC20] transition-colors duration-300">
              Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="py-16" style={{ background: COLORS.background }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0" style={{ 
                  background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.2) 0%, rgba(61, 0, 153, 0.2) 100%)',
                  backgroundSize: '150% 150%',
                  animation: 'pulse 3s infinite ease-in-out'
                }}></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#00FFCC20] border border-[#00FFCC50] flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00FFCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Rastreador Básico</h3>
                <p className="text-gray-300 mb-4">
                  Solução ideal para quem busca segurança com custo-benefício. Monitoramento em tempo real e alertas de movimento.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF3366] font-bold text-xl" style={{ textShadow: '0 0 5px rgba(255, 51, 102, 0.5)' }}>R$ 299,00</span>
                  <Button variant="secondary">Detalhes</Button>
                </div>
              </div>
            </div>
            
            {/* Produto 2 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0" style={{ 
                  background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.2) 0%, rgba(61, 0, 153, 0.2) 100%)',
                  backgroundSize: '150% 150%',
                  animation: 'pulse 3s infinite ease-in-out'
                }}></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#00FFCC20] border border-[#00FFCC50] flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00FFCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Rastreador Premium</h3>
                <p className="text-gray-300 mb-4">
                  Nossa solução mais completa, com bloqueio remoto, cercas virtuais e histórico de rotas por 90 dias.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF3366] font-bold text-xl" style={{ textShadow: '0 0 5px rgba(255, 51, 102, 0.5)' }}>R$ 499,00</span>
                  <Button variant="secondary">Detalhes</Button>
                </div>
              </div>
            </div>
            
            {/* Produto 3 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0" style={{ 
                  background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.2) 0%, rgba(61, 0, 153, 0.2) 100%)',
                  backgroundSize: '150% 150%',
                  animation: 'pulse 3s infinite ease-in-out'
                }}></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#00FFCC20] border border-[#00FFCC50] flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00FFCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Rastreador para Frotas</h3>
                <p className="text-gray-300 mb-4">
                  Solução empresarial para gestão de múltiplos veículos, com relatórios detalhados e otimização de rotas.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF3366] font-bold text-xl" style={{ textShadow: '0 0 5px rgba(255, 51, 102, 0.5)' }}>R$ 799,00</span>
                  <Button variant="secondary">Detalhes</Button>
                </div>
              </div>
            </div>
            
            {/* Produto 4 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0" style={{ 
                  background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.2) 0%, rgba(61, 0, 153, 0.2) 100%)',
                  backgroundSize: '150% 150%',
                  animation: 'pulse 3s infinite ease-in-out'
                }}></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#00FFCC20] border border-[#00FFCC50] flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00FFCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1m-6 0H9a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2h-6z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Rastreador para Motos</h3>
                <p className="text-gray-300 mb-4">
                  Desenvolvido especialmente para motocicletas, com design compacto e resistente a intempéries.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF3366] font-bold text-xl" style={{ textShadow: '0 0 5px rgba(255, 51, 102, 0.5)' }}>R$ 349,00</span>
                  <Button variant="secondary">Detalhes</Button>
                </div>
              </div>
            </div>
            
            {/* Produto 5 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0" style={{ 
                  background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.2) 0%, rgba(61, 0, 153, 0.2) 100%)',
                  backgroundSize: '150% 150%',
                  animation: 'pulse 3s infinite ease-in-out'
                }}></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#00FFCC20] border border-[#00FFCC50] flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00FFCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Kit Instalação</h3>
                <p className="text-gray-300 mb-4">
                  Kit completo para instalação profissional, incluindo cabos, conectores e manual detalhado.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF3366] font-bold text-xl" style={{ textShadow: '0 0 5px rgba(255, 51, 102, 0.5)' }}>R$ 99,00</span>
                  <Button variant="secondary">Detalhes</Button>
                </div>
              </div>
            </div>
            
            {/* Produto 6 */}
            <div className="bg-[rgba(30,30,47,0.7)] backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#00FFCC30] hover:shadow-[0_0_15px_rgba(0,255,204,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0" style={{ 
                  background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.2) 0%, rgba(61, 0, 153, 0.2) 100%)',
                  backgroundSize: '150% 150%',
                  animation: 'pulse 3s infinite ease-in-out'
                }}></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#00FFCC20] border border-[#00FFCC50] flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00FFCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading mb-2 text-[#00FFCC]" style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}>Plano Monitoramento Anual</h3>
                <p className="text-gray-300 mb-4">
                  Serviço de monitoramento 24/7 por 12 meses, com suporte técnico e atualizações de software.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF3366] font-bold text-xl" style={{ textShadow: '0 0 5px rgba(255, 51, 102, 0.5)' }}>R$ 599,00</span>
                  <Button variant="secondary">Detalhes</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo de Produtos */}
      <section className="py-16" style={{ background: COLORS.backgroundSecondary }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-white mb-4">
            Comparativo de <span className="text-[#00FFCC]" style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>Produtos</span>
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>
          
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg shadow-[0_0_20px_rgba(0,255,204,0.3)] border border-[#00FFCC30]">
              <thead>
                <tr style={{ background: 'rgba(61, 0, 153, 0.7)' }}>
                  <th className="py-4 px-6 text-left text-white">Recursos</th>
                  <th className="py-4 px-6 text-center text-white">Básico</th>
                  <th className="py-4 px-6 text-center text-white">Premium</th>
                  <th className="py-4 px-6 text-center text-white">Frotas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#00FFCC30]" style={{ background: 'rgba(30, 30, 47, 0.7)' }}>
                  <td className="py-4 px-6 font-medium text-white">Rastreamento GPS</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                </tr>
                <tr className="border-b border-[#00FFCC30]" style={{ background: 'rgba(30, 30, 47, 0.5)' }}>
                  <td className="py-4 px-6 font-medium text-white">Alertas de Movimento</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                </tr>
                <tr className="border-b border-[#00FFCC30]" style={{ background: 'rgba(30, 30, 47, 0.7)' }}>
                  <td className="py-4 px-6 font-medium text-white">Bloqueio Remoto</td>
                  <td className="py-4 px-6 text-center text-gray-400">✗</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                </tr>
                <tr className="border-b border-[#00FFCC30]" style={{ background: 'rgba(30, 30, 47, 0.5)' }}>
                  <td className="py-4 px-6 font-medium text-white">Cercas Virtuais</td>
                  <td className="py-4 px-6 text-center text-gray-400">✗</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                </tr>
                <tr className="border-b border-[#00FFCC30]" style={{ background: 'rgba(30, 30, 47, 0.7)' }}>
                  <td className="py-4 px-6 font-medium text-white">Histórico de Rotas</td>
                  <td className="py-4 px-6 text-center text-white">30 dias</td>
                  <td className="py-4 px-6 text-center text-white">90 dias</td>
                  <td className="py-4 px-6 text-center text-white">180 dias</td>
                </tr>
                <tr className="border-b border-[#00FFCC30]" style={{ background: 'rgba(30, 30, 47, 0.5)' }}>
                  <td className="py-4 px-6 font-medium text-white">Relatórios Detalhados</td>
                  <td className="py-4 px-6 text-center text-gray-400">✗</td>
                  <td className="py-4 px-6 text-center text-gray-400">✗</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                </tr>
                <tr className="border-b border-[#00FFCC30]" style={{ background: 'rgba(30, 30, 47, 0.7)' }}>
                  <td className="py-4 px-6 font-medium text-white">Gestão de Múltiplos Veículos</td>
                  <td className="py-4 px-6 text-center text-gray-400">✗</td>
                  <td className="py-4 px-6 text-center text-gray-400">✗</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                </tr>
                <tr style={{ background: 'rgba(30, 30, 47, 0.5)' }}>
                  <td className="py-4 px-6 font-medium text-white">Suporte Prioritário</td>
                  <td className="py-4 px-6 text-center text-gray-400">✗</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                  <td className="py-4 px-6 text-center text-[#00FFCC]">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: GRADIENTS.primary }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("/assets/circuit-pattern.png")',
          backgroundSize: 'cover',
          opacity: 0.1
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold font-heading text-white mb-6">
            Dúvidas sobre nossos <span className="text-[#121212]">produtos</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Nossa equipe está pronta para ajudar você a escolher a melhor solução para suas necessidades.
          </p>
          <Button variant="primary">Fale Conosco</Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
