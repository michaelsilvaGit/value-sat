import React from 'react';

interface TechnologyCardProps {
  titulo: string;
  descricao: string;
  link: string;
  icone: React.ReactNode;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ titulo, descricao, link, icone }) => {
  return (
    <div className="card rounded-lg">
      <div className="p-6">
        <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4 text-[var(--text-dark)]" style={{ boxShadow: 'var(--neon-glow)' }}>
          {icone}
        </div>
        <h3
          className="text-xl font-semibold font-heading mb-2 text-[var(--primary)]"
          style={{ textShadow: 'var(--neon-glow-text)' }}
        >
          {titulo}
        </h3>
        <p className="text-[var(--text-light-secondary)] mb-4">{descricao}</p>
        <a
          href={link}
          className="text-[var(--primary)] font-medium text-[var(--text-light) transition-colors underline"
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export default TechnologyCard;