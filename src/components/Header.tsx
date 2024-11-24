import React from 'react';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm transition-colors duration-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
            Dev<span className="text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link dark:text-gray-300 dark:hover:text-white">Inicio</a>
            <a href="#about" className="nav-link dark:text-gray-300 dark:hover:text-white">Sobre Mí</a>
            <a href="#projects" className="nav-link dark:text-gray-300 dark:hover:text-white">Proyectos</a>
            <a href="#skills" className="nav-link dark:text-gray-300 dark:hover:text-white">Habilidades</a>
            <a href="#contact" className="nav-link dark:text-gray-300 dark:hover:text-white">Contacto</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button 
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#home" className="nav-link-mobile dark:text-gray-300 dark:hover:text-white">Inicio</a>
              <a href="#about" className="nav-link-mobile dark:text-gray-300 dark:hover:text-white">Sobre Mí</a>
              <a href="#projects" className="nav-link-mobile dark:text-gray-300 dark:hover:text-white">Proyectos</a>
              <a href="#skills" className="nav-link-mobile dark:text-gray-300 dark:hover:text-white">Habilidades</a>
              <a href="#contact" className="nav-link-mobile dark:text-gray-300 dark:hover:text-white">Contacto</a>
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Modo Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Modo Oscuro</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};