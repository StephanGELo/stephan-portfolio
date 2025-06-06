import { portfolioData } from "../data/portfolioData";

// function Contact() {
//     return (
//         <section id="contact" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-slate-900/40 w-full max-w-full overflow-x-hidden">
//             <div className="max-w-4xl mx-auto text-center w-full">
//                 <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 px-2">
//                     Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
//                 </h2>
//                 <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
//                     I'm always open to discussing new opportunities, interesting projects, and creative collaborations.
//                 </p>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 w-full">
//                     <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 card w-full max-w-full">
//                         <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📧</div>
//                         <h3 className="text-base sm:text-lg font-bold text-white mb-2">Email</h3>
//                         <p className="text-blue-400 text-sm sm:text-base email-text">{portfolioData.email}</p>
//                     </div>
                    
//                     {portfolioData.phone && (
//                         <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 card w-full max-w-full">
//                             <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📱</div>
//                             <h3 className="text-base sm:text-lg font-bold text-white mb-2">Phone</h3>
//                             <p className="text-blue-400 text-sm sm:text-base break-words">{portfolioData.phone}</p>
//                         </div>
//                     )}
                    
//                     <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 sm:col-span-2 lg:col-span-1 card w-full max-w-full">
//                         <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📍</div>
//                         <h3 className="text-base sm:text-lg font-bold text-white mb-2">Location</h3>
//                         <p className="text-blue-400 text-sm sm:text-base break-words">{portfolioData.location}</p>
//                     </div>

//                     <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 sm:col-span-2 lg:col-span-1 card w-full max-w-full">
//                         <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📍</div>
//                         <h3 className="text-base sm:text-lg font-bold text-white mb-2">LinkedIn</h3>
//                         <p className="text-blue-400 text-sm sm:text-base break-words">{portfolioData.linkedin}</p>
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto w-full">
//                     <a
//                         href={`mailto:${portfolioData.email}`}
//                         className="w-full px-4 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-500/20 text-sm sm:text-base text-center flex-shrink-0"
//                     >
//                         Send Email
//                     </a>
//                     {/* <button className="w-full px-4 sm:px-8 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 border border-amber-500/40 hover:border-amber-400/60 text-amber-400 hover:text-amber-300 font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 text-sm sm:text-base flex-shrink-0">
//                         View Resume
//                     </button> */}
//                     <a
//                         href={portfolioData.resume}
//                         download
//                         className="w-full px-4 sm:px-8 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 border border-amber-500/40 hover:border-amber-400/60 text-amber-400 hover:text-amber-300 font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 text-sm sm:text-base text-center flex-shrink-0"
//                     >
//                         Download Resume
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }

//Version 2
// function Contact() {
//     return (
//         <section id="contact" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-slate-900/40 w-full max-w-full overflow-x-hidden">
//             <div className="max-w-4xl mx-auto text-center w-full">
//                 <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 px-2">
//                     Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
//                 </h2>
//                 <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
//                     I'm always open to discussing new opportunities, interesting projects, and creative collaborations.
//                 </p>
                
//                 {/* Contact Info Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 w-full">
//                     <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 card w-full max-w-full">
//                         <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📧</div>
//                         <h3 className="text-base sm:text-lg font-bold text-white mb-2">Email</h3>
//                         <p className="text-blue-400 text-sm sm:text-base email-text">{portfolioData.email}</p>
//                     </div>
                    
//                     {portfolioData.phone && (
//                         <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 card w-full max-w-full">
//                             <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📱</div>
//                             <h3 className="text-base sm:text-lg font-bold text-white mb-2">Phone</h3>
//                             <p className="text-blue-400 text-sm sm:text-base break-words">{portfolioData.phone}</p>
//                         </div>
//                     )}
                    
//                     <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 sm:col-span-2 lg:col-span-1 card w-full max-w-full">
//                         <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📍</div>
//                         <h3 className="text-base sm:text-lg font-bold text-white mb-2">Location</h3>
//                         <p className="text-blue-400 text-sm sm:text-base break-words">{portfolioData.location}</p>
//                     </div>
//                 </div>

//                 {/* Social Media Links */}
//                 <div className="mb-8 sm:mb-12">
//                     <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Connect With Me</h3>
//                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
//                         {/* LinkedIn */}
//                         <a
//                             href={portfolioData.linkedin || "https://linkedin.com/in/stephan-lefort"}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 card w-full max-w-full group"
//                         >
//                             <div className="text-2xl mb-2">💼</div>
//                             <h4 className="text-sm font-bold text-white mb-1">LinkedIn</h4>
//                             <p className="text-blue-400 text-xs group-hover:text-blue-300">Professional</p>
//                         </a>

//                         {/* GitHub */}
//                         <a
//                             href={portfolioData.github || "https://github.com/stephan-lefort"}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 card w-full max-w-full group"
//                         >
//                             <div className="text-2xl mb-2">🔗</div>
//                             <h4 className="text-sm font-bold text-white mb-1">GitHub</h4>
//                             <p className="text-blue-400 text-xs group-hover:text-blue-300">Code & Projects</p>
//                         </a>

//                         {/* Twitter */}
//                         <a
//                             href={portfolioData.twitter || "https://twitter.com/stephan_lefort"}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 card w-full max-w-full group"
//                         >
//                             <div className="text-2xl mb-2">🐦</div>
//                             <h4 className="text-sm font-bold text-white mb-1">Twitter</h4>
//                             <p className="text-blue-400 text-xs group-hover:text-blue-300">Updates & Thoughts</p>
//                         </a>

//                         {/* Instagram */}
//                         <a
//                             href={portfolioData.instagram || "https://instagram.com/stephan.lefort"}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 card w-full max-w-full group"
//                         >
//                             <div className="text-2xl mb-2">📸</div>
//                             <h4 className="text-sm font-bold text-white mb-1">Instagram</h4>
//                             <p className="text-blue-400 text-xs group-hover:text-blue-300">Life & Adventures</p>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto w-full">
//                     <a
//                         href={`mailto:${portfolioData.email}`}
//                         className="w-full px-4 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-500/20 text-sm sm:text-base text-center flex-shrink-0"
//                     >
//                         Send Email
//                     </a>
//                     <a
//                         href={portfolioData.resume || "/resume.pdf"}
//                         download
//                         className="w-full px-4 sm:px-8 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 border border-amber-500/40 hover:border-amber-400/60 text-amber-400 hover:text-amber-300 font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 text-sm sm:text-base text-center flex-shrink-0"
//                     >
//                         Download Resume
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }

//Verison 3
function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-slate-900/40 w-full max-w-full overflow-x-hidden">
            <div className="max-w-4xl mx-auto text-center w-full">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 px-2">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
                    I'm always open to discussing new opportunities, interesting projects, and creative collaborations.
                </p>
                
                {/* Contact Info Cards - Centered on Desktop */}
                <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 w-full">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 card w-full lg:w-auto lg:flex-1 lg:max-w-xs">
                        <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📧</div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">Email</h3>
                        <p className="text-blue-400 text-sm sm:text-base email-text"></p>
                    </div>
                    
                    {portfolioData.phone && (
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 card w-full lg:w-auto lg:flex-1 lg:max-w-xs">
                            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📱</div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Phone</h3>
                            <p className="text-blue-400 text-sm sm:text-base break-words">{portfolioData.phone}</p>
                        </div>
                    )}
                    
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 sm:p-6 hover:border-blue-600/40 transition-colors duration-300 shadow-xl shadow-blue-900/20 card w-full lg:w-auto lg:flex-1 lg:max-w-xs">
                        <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📍</div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">Location</h3>
                        <p className="text-blue-400 text-sm sm:text-base break-words">{portfolioData.location}</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mb-8 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Connect With Me</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                        {/* LinkedIn */}
                        <a
                            href={portfolioData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 card w-full max-w-full group"
                        >
                            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-blue-400 group-hover:text-blue-300">
                                    <circle cx="12" cy="12" r="12" fill="#0077b5"/>
                                    <path d="M8.15 19H5.59V10.62h2.56V19zM6.87 9.5a1.48 1.48 0 1 1 0-2.96 1.48 1.48 0 0 1 0 2.96zM19 19h-2.56v-4.06c0-.95-.02-2.18-1.33-2.18-1.33 0-1.54 1.04-1.54 2.11V19h-2.56V10.62h2.46v1.13h.03c.34-.64 1.18-1.33 2.43-1.33 2.6 0 3.08 1.71 3.08 3.93V19z" fill="white"/>
                                </svg>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">LinkedIn</h4>
                            <p className="text-blue-400 text-xs group-hover:text-blue-300">Professional</p>
                        </a>

                        {/* GitHub */}
                        <a
                            href={portfolioData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 card w-full max-w-full group"
                        >
                            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-blue-400 group-hover:text-blue-300">
                                    <circle cx="12" cy="12" r="12" fill="#000"/>
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="white"/>
                                </svg>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">GitHub</h4>
                            <p className="text-blue-400 text-xs group-hover:text-blue-300">Code & Projects</p>
                        </a>

                        {/* X (formerly Twitter) */}
                        <a
                            href={portfolioData.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 card w-full max-w-full group"
                        >
                            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-blue-400 group-hover:text-blue-300">
                                    <circle cx="12" cy="12" r="12" fill="#000"/>
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                                </svg>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">X</h4>
                            <p className="text-blue-400 text-xs group-hover:text-blue-300">Updates & Thoughts</p>
                        </a>

                        {/* Instagram */}
                        <a
                            href={portfolioData.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 hover:border-blue-600/40 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105 card w-full max-w-full group"
                        >
                            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-blue-400 group-hover:text-blue-300">
                                    <defs>
                                        <radialGradient id="instagram-gradient" cx="0.5" cy="1" r="1">
                                            <stop offset="0%" stopColor="#fdf497"/>
                                            <stop offset="5%" stopColor="#fdf497"/>
                                            <stop offset="45%" stopColor="#fd5949"/>
                                            <stop offset="60%" stopColor="#d6249f"/>
                                            <stop offset="90%" stopColor="#285AEB"/>
                                        </radialGradient>
                                    </defs>
                                    <circle cx="12" cy="12" r="12" fill="url(#instagram-gradient)"/>
                                    <rect x="6" y="6" width="12" height="12" rx="3" ry="3" fill="none" stroke="white" strokeWidth="1.5"/>
                                    <circle cx="12" cy="12" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
                                    <circle cx="16.5" cy="7.5" r="1" fill="white"/>
                                </svg>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">Instagram</h4>
                            <p className="text-blue-400 text-xs group-hover:text-blue-300">Life & Adventures</p>
                        </a>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto w-full">
                    <a
                        href={`mailto:${portfolioData.email}`}
                        className="w-full px-4 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-500/20 text-sm sm:text-base text-center flex-shrink-0"
                    >
                        Send Email
                    </a>
                    <a
                        href={portfolioData.resume || "/resume.pdf"}
                        download
                        className="w-full px-4 sm:px-8 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 border border-amber-500/40 hover:border-amber-400/60 text-amber-400 hover:text-amber-300 font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 text-sm sm:text-base text-center flex-shrink-0"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}


export default Contact;