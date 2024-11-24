import React from 'react';
import { Code2, Laptop, Rocket } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. 
              Con más de 5 años de experiencia en el desarrollo full stack, me especializo en 
              construir aplicaciones web modernas y escalables.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Desarrollo Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Creación de interfaces intuitivas y responsivas</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Laptop className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Desarrollo Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Arquitectura de APIs y servicios escalables</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Optimización</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mejora de rendimiento y experiencia de usuario</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
              alt="Workspace" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};