// import React from 'react';
import { portfolioData } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-4xl mx-auto overflow-fix">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 break-words">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 w-full max-w-full">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4 sm:mb-6 break-words">
              {portfolioData.bio}
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center flex-wrap">
                <span className="text-amber-400 mr-3 flex-shrink-0">📧</span>
                <span className="text-slate-300 text-sm sm:text-base break-all">{portfolioData.email}</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-400 mr-3 flex-shrink-0">📱</span>
                <span className="text-slate-300 text-sm sm:text-base break-words">{portfolioData.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-400 mr-3 flex-shrink-0">📍</span>
                <span className="text-slate-300 text-sm sm:text-base break-words">{portfolioData.location}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-first lg:order-last px-4">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl border border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-900/30">
              <img 
                src={portfolioData.profileImage2}
                alt="Adventure and Travel"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;