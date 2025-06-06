import { portfolioData } from "../data/portfolioData";

function Education() {
    return (
        <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 w-full max-w-full overflow-hidden">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Education</span>
                </h2>
                
                <div className="space-y-6 sm:space-y-8 w-full">
                    {portfolioData.education.map((edu, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-800/60 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/50 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 w-full max-w-full"
                        >
                            <div className="flex flex-col gap-3 mb-4">
                                <div className="w-full">
                                    <h3 className="text-lg sm:text-xl font-bold text-white break-words leading-tight">{edu.degree}</h3>
                                    <p className="text-blue-400 font-medium break-words text-sm sm:text-base">{edu.school}</p>
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    {edu.period && (
                                        <span className="text-amber-400 font-medium bg-amber-900/20 px-3 py-1 rounded-full border border-amber-600/30 text-sm inline-block w-fit">
                                            {edu.period}
                                        </span>
                                    )}
                                    {edu.gpa && (
                                        <span className="text-slate-300 text-xs sm:text-sm">
                                            {edu.gpa}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;