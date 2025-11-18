import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { OWNER_NAME, ROLE_TITLE } from '../constants';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">Available for hire</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Hi, I'm <span className="text-indigo-400">{OWNER_NAME}</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-8 max-w-2xl mx-auto">
          {ROLE_TITLE}
        </h2>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building accessible, pixel-perfect, and performant web experiences.
          Currently exploring the intersection of modern web dev and generative AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={scrollToProjects}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900"
          >
            View My Work
            <ArrowRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="https://github.com/PriyankaSDaida/PriyankaSDaida" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-300 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-200"
          >
            <Terminal className="mr-2 h-5 w-5" />
            View Source
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;