import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ChatWidget from './components/ChatWidget';
import { SectionId } from './types';
import { GitPullRequest } from 'lucide-react';

function App() {
  // Simple footer component for the layout
  const Footer = () => (
    <footer id={SectionId.CONTACT} className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-bold text-white">Priyanka.dev</span>
          <p className="text-slate-500 text-sm mt-1">Built with React, Tailwind & Gemini AI</p>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">LinkedIn</a>
          <a href="https://github.com/PriyankaSDaida" className="text-slate-400 hover:text-white text-sm transition-colors">GitHub</a>
          <a 
            href="https://github.com/PriyankaSDaida/PriyankaSDaida/pulls" 
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors flex items-center gap-1"
          >
            <GitPullRequest size={14} />
            Raise a PR
          </a>
        </div>
      </div>
    </footer>
  );

  // Set page title
  useEffect(() => {
    document.title = "Priyanka S Daida | Portfolio";
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;