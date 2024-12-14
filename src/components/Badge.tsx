import React from 'react';

interface BardeProps
{
  text: string;
  backgroundColor?: string;
}

const Badge: React.FC<BardeProps> = ({ text }) =>
{
  return (
    <span className="p-0.5 pl-2 pr-2 rounded-full text-xs font-medium bg-badge">
      {text}
    </span>
  );
};

export default Badge;
