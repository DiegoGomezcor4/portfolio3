import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 transition-colors duration-200">
      <div className="container mx-auto px-6 py-24 text-center">
        <img 
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&auto=format&fit=crop&crop=faces&q=80" 
          alt="Profile" 
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-white dark:border-gray-800 shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Desarrollador Web Full Stack
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Creando experiencias digitales excepcionales a través del código. 
          Especializado en React, Node.js y diseño UI/UX.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Contáctame
          </a>
          <a 
            href="#projects" 
            className="btn-secondary"
          >
            Ver Proyectos
          </a>
        </div>
        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </a>
      </div>
    </section>
  );
};