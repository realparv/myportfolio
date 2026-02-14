import { motion } from 'framer-motion';
import ProfileImg from '../assets/Profile.png';

const About = () => {
    return (
        <section className="py-24 relative" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16 backdrop-blur-sm bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <img
                                src={ProfileImg}
                                alt="Profile"
                                className="relative rounded-[2rem] shadow-2xl w-full max-w-md mx-auto z-10 border border-white/10"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 hover:hue-rotate-90 transition-all duration-500 cursor-default">
                            About Me
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                            I am a Java Full Stack Developer with 3+ years of experience building scalable, secure, and high-performance web applications. I specialize in Spring Boot microservices, REST API development, and modern frontend development using React and TypeScript.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                            I focus on writing clean, maintainable code and designing systems that scale efficiently. My experience includes database optimization, event-driven architecture using Kafka, Docker containerization, and cloud deployments on AWS.
                        </p>

                        <div className="flex space-x-12 mt-10">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-white mb-2">3+</h3>
                                <p className="text-blue-300 text-sm uppercase tracking-wider font-semibold">Years Exp.</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-white mb-2">10+</h3>
                                <p className="text-purple-300 text-sm uppercase tracking-wider font-semibold">Projects</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
