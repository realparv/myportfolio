import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'FitHub Gym Dashboard',
        description: 'A comprehensive dashboard for gym management, featuring member tracking, workout analytics, and financial overview.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        github: 'https://github.com/realparv/fithub-gym-dashboard',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task manager with real-time updates using Socket.io.',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
    },
    {
        title: 'AI Dashboard',
        description: 'An analytics dashboard powered by AI for data visualization.',
        tech: ['Python', 'React', 'D3.js', 'FastAPI'],
        github: '#',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = clientX - left;
        const yPct = clientY - top;

        x.set(xPct);
        y.set(yPct);

        const xRotation = ((yPct - height / 2) / height) * -20;
        const yRotation = ((xPct - width / 2) / width) * 20;

        rotateX.set(xRotation);
        rotateY.set(yRotation);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            style={{
                perspective: 1000,
            }}
            className="group relative"
        >
            <motion.div
                ref={ref}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-blue-500/20"
            >
                <div className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0 pointer-events-none">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
                        style={{
                            maskImage: useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`,
                            WebkitMaskImage: useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`,
                        }}
                    />
                </div>

                <div className="relative z-10 overflow-hidden h-56 transform-style-3d">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm z-20">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all transform hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                            <Github size={22} />
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all transform hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                            <ExternalLink size={22} />
                        </a>
                    </div>
                </div>

                <div className="relative z-10 p-8 transform-style-3d bg-black/20 group-hover:bg-transparent transition-colors duration-500">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors translate-z-10 group-hover:translate-z-20">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm translate-z-10">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 translate-z-10">
                        {project.tech.map((tech) => (
                            <span key={tech} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-blue-200 group-hover:border-blue-500/30 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="py-24 relative" id="projects">
            <div className="container mx-auto px-4 z-10 relative">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 hover:hue-rotate-90 transition-all duration-500 cursor-default">
                    Featured Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
