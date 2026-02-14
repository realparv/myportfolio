import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Layout: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="min-h-screen font-sans text-gray-100 relative overflow-x-hidden">
            {/* Background elements for depth */}
            <div className="fixed inset-0 z-[-1]">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
            </div>

            <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] lg:w-auto">
                <nav className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 flex items-center justify-between lg:justify-center relative">
                    <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent lg:hidden">
                        Parv
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-8 text-sm font-medium text-gray-300">
                        {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                    className="hover:text-white transition-colors relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 p-4 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl lg:hidden flex flex-col space-y-4 items-center"
                        >
                            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-white font-medium text-lg w-full text-center py-2 hover:bg-white/5 rounded-xl transition-all"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <main className="pt-24 pb-12">
                <Outlet />
            </main>

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20 backdrop-blur-sm mt-20">
                <p>© {new Date().getFullYear()} Parv Sharma. Crafted with <span className="text-red-500">♥</span> using React & Tailwind.</p>
            </footer>
        </div>
    );
};

export default Layout;
