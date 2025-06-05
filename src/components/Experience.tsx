import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function Experience() {
    return (
        <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
                    Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
                </h2>
                
                <div className="space-y-6 sm:space-y-8">
                    {portfolioData.experience.map((exp, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div className="mb-2 sm:mb-0">
                                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                                    <p className="text-blue-400 font-medium">{exp.company}</p>
                                </div>
                                <span className="text-amber-400 font-medium bg-amber-900/20 px-3 py-1 rounded-full border border-amber-600/30 text-sm sm:text-base self-start sm:self-auto">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-slate-200 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;