import Link from 'next/link';

export default function Hero() {
    return (
        <section className="px-6 pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif tracking-tight mb-8">
                Iremide Awobodu.
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 max-w-3xl leading-relaxed mb-12">
                I'm a web developer specializing in building (and occasionally designing) exceptional digital experiences.
            </p>

            <div className="flex gap-4">
                <Link
                    href="#projects"
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black rounded-md text-base md:text-lg transition-colors inline-block"
                >
                    View My Work
                </Link>
            </div>
        </section>
    );
}
