import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
  return (
    <di className="bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.02]">
      {children}
    
  );
}