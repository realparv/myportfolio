import { motion } from 'framer-motion';

const skills = [
    { name: 'Java', level: 'Intermediate' },
    { name: 'Spring Boot', level: 'Intermediate' },
    { name: 'Microservices', level: 'Intermediate' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Advanced' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'Kafka', level: 'Intermediate' },
    { name: 'Redis', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
];

const TechStack = () => {
    return (
        <section className="py-24 relative" id="skills">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-4 hover:hue-rotate-90 transition-all duration-500 cursor-default">
                        Tech Arsenal
                    </h2>
                    <p className="text-gray-400 text-lg">Tools I use to create magic.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderColor: "rgba(255, 255, 255, 0.4)"
                            }}
                            className="group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col items-cnter justify-center text-center cursor-default"
                        >
                            <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                                {skill.name}
                            </h3>
                            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 opacity-50 group-hover:opacity-100 transition-opacity mx-auto"></div>
                            <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                {skill.level}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
