import React from 'react';
import { portfolioData } from '../data/portfolioData';

function About() {

    return (
<section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-8 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20">
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                {portfolioData.bio}
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-amber-400 mr-3">📧</span>
                  <span className="text-slate-300">{portfolioData.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-400 mr-3">📱</span>
                  <span className="text-slate-300">{portfolioData.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-400 mr-3">📍</span>
                  <span className="text-slate-300">{portfolioData.location}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-amber-500/10 rounded-2xl border border-blue-500/30 flex items-center justify-center shadow-2xl shadow-blue-900/30">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;