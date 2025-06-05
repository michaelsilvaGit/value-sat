import '../tech-theme.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import { COMPANY_INFO } from '../lib/constants';
import ProductCard from '@/components/ui/ProductCard';

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
            Nossos <span className="text-[var(--primary)]" style={{ textShadow: 'var(--neon-glow)' }}>Produtos</span>
          </h1>
        </div>
      </section>

      {/* Filtros de Produtos */}
      <section className="py-8 border-b border-[var(--border-color)]" style={{ background: 'var(--background-secondary)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[var(--primary)] text-[var(--text-dark)] px-4 py-2 rounded-md font-medium" style={{ boxShadow: 'var(--neon-glow)' }}>
              Todos
            </button>
            <button className="border-2 border-[var(--primary)] text-[var(--primary)] px-4 py-2 rounded-md font-medium hover:bg-[var(--border-color)] transition-colors duration-300">
              Rastreadores
            </button>
            <button className="border-2 border-[var(--primary)] text-[var(--primary)] px-4 py-2 rounded-md font-medium hover:bg-[var(--border-color)] transition-colors duration-300">
              Acessórios
            </button>
            <button className="border-2 border-[var(--primary)] text-[var(--primary)] px-4 py-2 rounded-md font-medium hover:bg-[var(--border-color)] transition-colors duration-300">
              Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="py-16" style={{ background: 'var(--background)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-left" data-aos-delay="100">
            {/* Produto 1 */}
            <ProductCard
              title="Rastreador Básico"
              description="Solução ideal para quem busca segurança com custo-benefício. Monitoramento em tempo real e alertas de movimento."
              price="R$ 299,00"
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              }
              onDetailsClick={() => console.log('Details clicked')}
            />
            
            {/* Produto 2 */}
            <ProductCard
              title="Rastreador Premium"
              description="Nossa solução mais completa, com bloqueio remoto, cercas virtuais e histórico de rotas por 90 dias."
              price="R$ 499,00"
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
              onDetailsClick={() => console.log('Details clicked')}
            />
            
            {/* Produto 3 */}
            <ProductCard
              title="Rastreador para Frotas"
              description="Solução empresarial para gestão de múltiplos veículos, com relatórios detalhados e otimização de rotas."
              price="R$ 499,00"
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
              onDetailsClick={() => console.log('Details clicked')}
            />
          </div>
        </div>
      </section>

      {/* Comparativo de Produtos */}
      <section className="py-16" style={{ background: 'var(--background-secondary)' }}>
        <div className="container mx-auto px-4" data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-3xl font-bold font-heading text-center text-[var(--text-light)] mb-4">
            Comparativo de <span className="text-[var(--primary)]" style={{ textShadow: 'var(--box-shadow)' }}>Produtos</span>
          </h2>
          <div className="tech-line w-24 mx-auto mb-12"></div>
          
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg border border-[var(--border-color)]" style={{boxShadow: 'var(--box-shadow)'}}>
              <thead>
                <tr style={{ background: 'var(--secondary)' }}>
                  <th className="py-4 px-6 text-left text-[var(--text-light)]">Recursos</th>
                  <th className="py-4 px-6 text-center text-[var(--text-light)]">Básico</th>
                  <th className="py-4 px-6 text-center text-[var(--text-light)]">Premium</th>
                  <th className="py-4 px-6 text-center text-[var(--text-light)]">Frotas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'var(--background-secondary)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Rastreamento GPS</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'var(--background-secondary-light)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Alertas de Movimento</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'var(--background-secondary)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Bloqueio Remoto</td>
                  <td className="py-4 px-6 text-center text-[var(--text-light-secondary)]">✗</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'var(--background-secondary-light)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Cercas Virtuais</td>
                  <td className="py-4 px-6 text-center var(--text-light-secondary)">✗</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'var(--background-secondary)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Histórico de Rotas</td>
                  <td className="py-4 px-6 text-center text-[var(--text-light)]">30 dias</td>
                  <td className="py-4 px-6 text-center text-[var(--text-light)]">90 dias</td>
                  <td className="py-4 px-6 text-center text-[var(--text-light)]">180 dias</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'var(--background-secondary-light)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Relatórios Detalhados</td>
                  <td className="py-4 px-6 text-center var(--text-light-secondary)">✗</td>
                  <td className="py-4 px-6 text-center var(--text-light-secondary)">✗</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                </tr>
                <tr className="border-b border-[var(--border-color)]" style={{ background: 'var(--background-secondary)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Gestão de Múltiplos Veículos</td>
                  <td className="py-4 px-6 text-center var(--text-light-secondary)">✗</td>
                  <td className="py-4 px-6 text-center var(--text-light-secondary)">✗</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                </tr>
                <tr style={{ background: 'var(--background-secondary-light)' }}>
                  <td className="py-4 px-6 font-medium text-[var(--text-light)]">Suporte Prioritário</td>
                  <td className="py-4 px-6 text-center var(--text-light-secondary)">✗</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
                  <td className="py-4 px-6 text-center text-[var(--primary)]">✓</td>
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
