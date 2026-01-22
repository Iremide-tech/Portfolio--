import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: "PhishGuard",
        description: "A Phishing Detection Bot.",
        image: "/images/Phishguard.png",
        link: "https://github.com/Iremide-tech/Phishguard.git"
    },
    {
        title: "Bud-AI",
        description: "An Ai companion for kids to help them learn and grow.",
        image: "/images/Bud.png",
        link: "https://bud-ai-xi.vercel.app"
    },
    {
        title: "Kraven-OS",
        description: "A set of cybersecurity tools.",
        image: "/images/KravenOS.png",
        link: "https://kraven-os.vercel.app"
    }
];

export default function FeaturedProjects() {
    return (
        <section id="projects" className="px-6 py-16 md:py-24 max-w-7xl mx-auto bg-gray-50/50">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-medium">Featured Projects</h2>
                <span className="text-gray-500 text-xs md:text-sm">A selection of recent work</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Link href={project.link} key={index} className="group block">
                        <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-64 w-full bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-medium mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-8">{project.description}</p>
                                <div className="flex justify-end">
                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
