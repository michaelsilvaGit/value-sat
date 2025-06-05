import React from 'react';

interface DepoimentCardProps {
  name: string;
  profession: string;
  comment: string;
}

const DepoimentCard: React.FC<DepoimentCardProps> = ({ name, profession, comment }) => {
  // Pegando as iniciais do nome para o círculo
  const iniciais = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="card p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-[var(--secondary)] rounded-full mr-4 flex items-center justify-center text-[var(--primary)] font-bold">
          {iniciais}
        </div>
        <div>
          <h4 className="font-semibold text-[var(--text-light)]">{name}</h4>
          <p className="text-sm text-[var(--primary)]">{profession}</p>
        </div>
      </div>
      <div
        className="mb-4 text-[var(--primary)] text-4xl"
        style={{ textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}
      >
        "
      </div>
      <p className="text-[var(--text-light-secondary)] italic mb-4">{comment
      }</p>
    </div>
  );
};

export default DepoimentCard;