import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              ¡Hablemos sobre tu proyecto!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Estoy siempre interesado en nuevos proyectos y oportunidades. 
              No dudes en contactarme para discutir cómo puedo ayudarte.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-300">contacto@ejemplo.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-300">+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-300">Madrid, España</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="form-input"
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};