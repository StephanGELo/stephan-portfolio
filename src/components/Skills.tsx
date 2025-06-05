import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Skills() {
    const skillGroups = portfolioData.skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof portfolioData.skills>);

    return (
        <section
            id="skills"
            className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 w-full max-w-full overflow-hidden"
        >
            <div className="max-w-6xl mx-auto overflow-fix">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 break-words">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
                    {Object.entries(skillGroups).map(([category, skills]) => (
                        <div
                        key={category}
                        className="bg-slate-800/60 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/50 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 w-full max-w-full"
                        >
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 sm:mb-6 text-center break-words">
                            {category}
                        </h3>
                        
                        <div className="space-y-3 sm:space-y-4">
                            {skills.map(skill => (
                            <div key={skill.name} className="group w-full">
                                <div className="flex justify-between items-center mb-2 w-full">
                                <span className="text-slate-200 text-sm sm:text-base font-medium truncate pr-2 flex-1 min-w-0">
                                    {skill.name}
                                </span>
                                <span className="text-amber-400 text-xs sm:text-sm font-bold bg-amber-900/20 px-2 py-1 rounded-full border border-amber-600/30 flex-shrink-0">
                                    {skill.level}
                                </span>
                                </div>
                                <div className="bg-slate-700/50 rounded-full h-2 border border-slate-600/30 overflow-hidden w-full">
                                <div
                                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 transition-all duration-1000 shadow-sm shadow-blue-400/30 group-hover:shadow-blue-400/50"
                                    style={{ width: `${skill.level}` }}
                                />
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;