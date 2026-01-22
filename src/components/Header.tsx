'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <Link href="/" className="text-xl md:text-2xl font-medium tracking-tight">
                    Iremide Awobodu
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
                    <Link href="/" className="hover:text-black transition-colors">Home</Link>
                    <Link href="#projects" className="hover:text-black transition-colors">Projects</Link>
                    <Link href="/skills" className="hover:text-black transition-colors">Skills</Link>
                    <Link href="#about" className="hover:text-black transition-colors">About</Link>
                    <Link href="#contact" className="hover:text-black transition-colors">Contact</Link>
                    <a
                        href="/resume.pdf"
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-black rounded-md transition-colors font-medium ml-2"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col p-6 gap-4 text-base font-medium text-gray-600">
                        <Link href="/" onClick={toggleMenu} className="hover:text-black transition-colors py-2">Home</Link>
                        <Link href="#projects" onClick={toggleMenu} className="hover:text-black transition-colors py-2">Projects</Link>
                        <Link href="/skills" onClick={toggleMenu} className="hover:text-black transition-colors py-2">Skills</Link>
                        <Link href="#about" onClick={toggleMenu} className="hover:text-black transition-colors py-2">About</Link>
                        <Link href="#contact" onClick={toggleMenu} className="hover:text-black transition-colors py-2">Contact</Link>
                        <a
                            href="/resume.pdf"
                            onClick={toggleMenu}
                            className="text-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-black rounded-md transition-colors font-medium mt-2"
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
