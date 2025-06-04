import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
    onScrollTo: (section: string) => void;
    isLoaded: boolean;
}

function Hero({  onScrollTo, isLoaded }: HeroProps) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mx-auto mb-6 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white shadow-2xl shadow-blue-500/25 border-2 border-amber-400/20">
              {portfolioData.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">{portfolioData.name.split(' ')[0]}</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400">
              {portfolioData.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {portfolioData.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onScrollTo('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-500/20"
            >
              View My Work
            </button>
            <button
              onClick={() => onScrollTo('contact')}
              className="px-8 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 border border-amber-500/40 hover:border-amber-400/60 text-amber-400 hover:text-amber-300 font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    );
}