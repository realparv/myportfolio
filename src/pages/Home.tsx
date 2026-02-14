import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Hero />
            <TechStack />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
