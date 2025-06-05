import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="card rounded-lg">
      <div className="p-6">
        <div
          className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4 text-[var(--text-dark)]"
          style={{ boxShadow: 'var(--box-shadow)' }}
        >
          <div className="w-8 h-8">{icon}</div>
        </div>
        <h3
          className="text-xl font-semibold font-heading mb-2 text-[var(--primary)]"
          style={{ textShadow: 'var(--neon-glow-text)' }}
        >
          {title}
        </h3>
        <p className="text-[var(--text-light-secondary)]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;