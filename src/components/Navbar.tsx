
interface NavbarProps {
    activeSection : string;
    isMenuOpen : boolean;
    setActiveSection: (section: string) => void;
    setIsMenuOpen: (open: boolean) => void;
    onScrollTo: (section: string) => void;

}

function Navbar({ activeSection, isMenuOpen, setActiveSection, setIsMenuOpen, onScrollTo }: NavbarProps) {
    // const scrollToSection = (sectionId: string) => {
    //     const element = document.getElementById(sectionId);
    //     element?.scrollIntoView({ behavior: 'smooth'});
    //     setActiveSection(sectionId);
    //     setIsMenuOpen(false);
    // }

    const navItems = [ 'home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];


    return (
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-blue-800/50 z-50 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 truncate">
                Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
                <div className="flex items-center space-x-4 lg:space-x-8">
                {navItems.map(item => (
                    <button
                    key={item}
                    onClick={() => onScrollTo(item)}
                    className={`capitalize hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base ${
                        activeSection === item ? 'text-blue-400' : 'text-slate-300'
                    }`}
                    >
                    {item}
                    </button>
                ))}
                </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-200 p-2"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                    />
                </svg>
                </button>
            </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-slate-700/50">
                <div className="px-2 pt-2 pb-3 space-y-1 max-h-80 overflow-y-auto">
                {navItems.map(item => (
                    <button
                    key={item}
                    onClick={() => onScrollTo(item)}
                    className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-700/30 capitalize transition-colors duration-200 w-full text-left rounded-lg"
                    >
                    {item}
                    </button>
                ))}
                </div>
            </div>
            )}
        </div>
        </nav>
    );
}

export default Navbar;