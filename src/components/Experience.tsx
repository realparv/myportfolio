import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'Software Engineer',
        company: 'Samin Tekmindz India Pvt. Ltd.',
        period: 'February 2023 – Present',
        description: [
            'Developed scalable backend services using Spring Boot.',
            'Built dynamic and reusable React.js frontend components.',
            'Designed and optimized secure REST APIs.',
            'Implemented Kafka-based event streaming.',
            'Reduced API response time by ~25%.',
            'Improved database performance via indexing and query optimization.',
            'Containerized services using Docker.',
            'Participated in Agile development and code reviews.'
        ]
    },
    {
        role: 'Intern',
        company: 'Brahmashira Astra Bharat Pvt. Ltd.',
        period: 'September 2022 – October 2022',
        description: [
            'Assisted in developing defense software modules.',
            'Worked on documentation and SDLC processes.',
            'Gained hands-on experience in enterprise-level systems.'
        ]
    }
];

const Experience = () => {
    return (
        <section className="py-24 relative" id="experience">
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-4 hover:hue-rotate-90 transition-all duration-500 cursor-default">
                        Professional Experience
                    </h2>
                    <p className="text-gray-400 text-lg">My journey in the tech industry.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center text-blue-400 mt-2 font-medium">
                                        <Briefcase size={18} className="mr-2" />
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-400 mt-4 md:mt-0 text-sm">
                                    <Calendar size={16} className="mr-2" />
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
