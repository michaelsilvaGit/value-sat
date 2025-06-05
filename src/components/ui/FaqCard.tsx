import React from 'react';

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  return (
    <details className="bg-[var(--background-secondary)] backdrop-blur-md rounded-lg border border-[var(--border-color)] overflow-hidden group">
      <summary className="flex justify-between items-center p-4 cursor-pointer text-[var(--text-light)] font-medium group-hover:text-[var(--primary)] transition-colors">
        {question}
        <svg
          className="w-5 h-5 transform group-open:rotate-180 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="p-4 border-t border-[var(--border-color)] text-[var(--text-light-secondary)]">
        {answer}
      </div>
    </details>
  );
};

export default FaqCard;