"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  showLoading: (duration?: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Esconder loading após um tempo quando o componente montar
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 segundos de loading inicial
    
    return () => clearTimeout(timer);
  }, []);

  const showLoading = (duration = 2000) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, duration);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, showLoading }}>
      {/* Sempre renderiza o conteúdo principal */}
      {children}
      
      {/* Sobrepõe a tela de loading quando isLoading é true */}
      {isLoading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0225] z-[9999] overflow-hidden">
          {/* Ícones flutuantes */}
          <div className="flex gap-8 mb-12 animate-fadeIn">
            <div className="icon-container animate-float animation-delay-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-purple-400 transition-colors" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg>
            </div>
            <div className="icon-container animate-float animation-delay-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-purple-400 transition-colors" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
            </div>
            <div className="icon-container animate-float animation-delay-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-purple-400 transition-colors" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </div>
          </div>

          {/* Partículas de fundo */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`} />
            ))}
          </div>
          
          {/* Conteúdo principal com animação */}
          <div className="text-center mb-12 animate-fadeIn relative">
            <div className="glow-effect"></div>
            <h1 className="text-5xl font-bold text-white mb-3 animate-slideUp">
              Welcome To My
              <span className="block text-white animate-slideUp animation-delay-200">Portfolio Website</span>
            </h1>
          </div>
          
          {/* Loading animado */}
          <div className="loading-container">
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}