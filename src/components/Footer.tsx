import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="px-6 py-10 md:py-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-500 gap-6">
            <p>© 2025 Iremide Awobodu. All Rights Reserved.</p>
            <div className="flex gap-8 mt-2 md:mt-0">
                {/* Simple text icons for demo, can replace with Lucide icons */}
                <Link href="https://github.com/Iremide-tech" className="hover:text-black transition-colors">Github</Link>
                <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
                <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
            </div>
        </footer>
    );
}
