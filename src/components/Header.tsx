import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming we might use a button component, but for now standard tags or Tailwind

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-medium tracking-tight">
              Iremide Awobodu
            </Link>

            <nav className="flex items-center gap-8 text-sm text-gray-600">
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
        </header>
    );
}
