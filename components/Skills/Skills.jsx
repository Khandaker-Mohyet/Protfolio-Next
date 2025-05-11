import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { DotPattern } from '../magicui/dot-pattern';
import { cn } from '@/lib/utils';

const Skills = () => {
  return (
    <div id="services" className="relative py-10 mt-10 bg-background text-center overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 flex justify-center items-center">
        <DotPattern
          width={200}
          height={200}
          cx={100}
          cy={100}
          cr={2}
          className={cn(
            'opacity-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
            'text-neutral-300 dark:text-neutral-700'
          )}
        />
      </div>
      <h2 className="text-4xl font-bold font-manrope mb-6 relative z-10">All Skills</h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-base font-normal leading-relaxed mb-8 relative z-10">
        Here are some of the key technologies and tools I work with regularly.
      </p>
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        <FaHtml5 className="text-6xl text-orange-600" />
        <FaCss3Alt className="text-6xl text-blue-600" />
        <SiTailwindcss className="text-6xl text-teal-500" />
        <FaJsSquare className="text-6xl text-yellow-500" />
        <SiTypescript className="text-6xl text-blue-500" />
        <FaReact className="text-6xl text-blue-400" />
        <SiMongodb className="text-6xl text-green-600" />
        <FaNodeJs className="text-6xl text-green-500" />
        <SiExpress className="text-6xl text-gray-600" />
      </div>
    </div>
  );
};

export default Skills;
