import React from 'react';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Herramientas',
    items: ['Git', 'Docker', 'AWS', 'Jest', 'Figma']
  },
  {
    category: 'Soft Skills',
    items: ['Trabajo en equipo', 'Comunicación', 'Resolución de problemas', 'Gestión del tiempo', 'Adaptabilidad']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 min-w-[100px]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};