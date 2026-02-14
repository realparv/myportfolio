import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Hello", "Namaste", "Bonjour", "Hola", "Guten Tag"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.5); // Speed up deleting
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period); // Wait before deleting
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500); // Wait bit before typing next word
        } else {
            // Randomize typing speed for realism
            setDelta(Math.random() * 100 + 50);
        }
    }

    return (
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden" id="home">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-[100px] animate-pulse delay-700"></div>

            <div className="container mx-auto px-4 z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="p-6 md:p-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-base md:text-xl font-medium text-blue-300 mb-4 tracking-wider uppercase h-[30px] flex items-center">
                            {text}<span className="inline-block w-3 h-5 md:h-6 bg-blue-400 ml-1 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>, I'm
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
                                Parv Sharma
                            </span>
                        </h1>
                        <p className="text-base md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light">
                            <span className="text-white font-normal">Java Full Stack Developer</span> based in <span className="text-blue-300">Noida, India</span>. Specializing in scalable microservices and modern frontends.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                        <a
                            href="#projects"
                            className="group px-8 py-3 bg-white text-black rounded-full font-semibold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center"
                        >
                            View Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center space-x-8 pt-8 border-t border-white/10">
                        {[
                            { icon: Github, href: "https://github.com/realparv" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/realparv/" },
                            { icon: Mail, href: "mailto:officialparvsharma@gmail.com" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target={item.href.startsWith('http') ? "_blank" : undefined}
                                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors p-2"
                            >
                                <item.icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
