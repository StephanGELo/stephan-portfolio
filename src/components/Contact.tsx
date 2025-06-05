import { portfolioData } from "../data/portfolioData";

function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                    I'm always open to discussing new opportunities, interesting projects, and creative collaborations.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20">
                        <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📧</div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">Email</h3>
                        <p className="text-blue-400 text-sm sm:text-base break-all">{portfolioData.email}</p>
                    </div>
                    
                    {portfolioData.phone && (
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20">
                            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📱</div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Phone</h3>
                            <p className="text-blue-400 text-sm sm:text-base">{portfolioData.phone}</p>
                        </div>
                    )}
                    
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 sm:col-span-2 lg:col-span-1">
                        <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📍</div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">Location</h3>
                        <p className="text-blue-400 text-sm sm:text-base">{portfolioData.location}</p>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`mailto:${portfolioData.email}`}
                        className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-500/20 text-sm sm:text-base"
                    >
                        Send Email
                    </a>
                    <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 border border-amber-500/40 hover:border-amber-400/60 text-amber-400 hover:text-amber-300 font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 text-sm sm:text-base">
                        View Resume
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;