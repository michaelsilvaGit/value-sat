import React from 'react';
import Button from './Button';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  onDetailsClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, icon, onDetailsClick }) => {


    
  return (
    <div className="card rounded-lg overflow-hidden">
      <div className="h-48 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 0%, rgba(61, 0, 153, 0.2) 100%)',
            backgroundSize: '150% 150%',
            animation: 'pulse 3s infinite ease-in-out',
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center">
            <div className="w-12 h-12 text-[var(--primary)]">
              {icon}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-semibold font-heading mb-2 text-[var(--primary)]"
          style={{ textShadow: 'var(--neon-glow)' }}
        >
          {title}
        </h3>
        <p className="text-[var(--text-light-secondary)] mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span
            className="text-[var(--text-price)] font-bold text-xl"
            style={{ textShadow: '0 0 5px var(--text-price-neon)' }}
          >
            {price}
          </span>
          <Button variant="secondary" onClick={onDetailsClick}>Detalhes</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;