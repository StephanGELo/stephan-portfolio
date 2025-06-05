// import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
    onScrollTo: (section: string) => void;
    isLoaded: boolean;
}

function Hero({  onScrollTo, isLoaded }: HeroProps) {
  return (
    <section id="home" className="min-h-[65vh] sm:min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 pt-16 w-full max-w-full overflow-x-hidden">
      <div className={`text-center transition-all duration-1000 max-w-4xl mx-auto w-full ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-4 sm:mb-6 shadow-2xl shadow-blue-500/25 border-2 sm:border-4 border-blue-500/30 overflow-hidden">
            <img 
              src={portfolioData.profileImage1} 
              alt="Stephan - Full Stack Developer avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 break-words text-balance leading-tight hero-title px-2">
          <span className="text-white break-words">{portfolioData.name.split(' ')[0]}</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 break-words">
            {portfolioData.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-3 hero-subtitle break-words">
          {portfolioData.title}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-3 button-container max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => onScrollTo('projects')}
            className="w-full sm:w-auto px-4 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-500/20 text-sm sm:text-base flex-shrink-0"
          >
            View My Work
          </button>
          <button
            onClick={() => onScrollTo('contact')}
            className="w-full sm:w-auto px-4 sm:px-8 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 border border-amber-500/40 hover:border-amber-400/60 text-amber-400 hover:text-amber-300 font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 text-sm sm:text-base flex-shrink-0"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;