import { portfolioData } from "../data/portfolioData";

function Projects() {
    return (
        <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
            <div className="max-w-6xl mx-auto overflow-fix">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 break-words">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                    {portfolioData.projects.map((project, index) => (
                        <div 
                        key={index} 
                        className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 flex flex-col h-full w-full max-w-full"
                        >
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 break-words">{project.title}</h3>
                        <p className="text-slate-200 mb-4 leading-relaxed text-sm sm:text-base flex-grow break-words">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4 w-full">
                            {project.tech.map((tech) => (
                            <span 
                                key={tech} 
                                className="px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-600/40 shadow-sm break-words"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                        
                        <div className="flex flex-col gap-2 sm:gap-3 mt-auto w-full">
                            {project.link && (
                            <a
                                href={project.link}
                                className="flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors duration-200 font-medium text-sm sm:text-base py-2 px-3 bg-amber-900/20 rounded-lg border border-amber-600/30 hover:border-amber-500/50 w-full"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                </svg>
                                <span className="truncate">Live Demo</span>
                            </a>
                            )}
                            {project.github && (
                            <a
                                href={project.github}
                                className="flex items-center justify-center text-slate-400 hover:text-slate-300 transition-colors duration-200 font-medium text-sm sm:text-base py-2 px-3 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-slate-500/70 w-full"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                <span className="truncate">GitHub</span>
                            </a>
                            )}
                        </div>
                        </div>
                    ))}
                </div>                
            </div>
        </section>
    );
}

export default Projects;
