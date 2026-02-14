import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            // Check if the target is clickable (link, button, input, etc.)
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isClicking ? 0.8 : isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />

            {/* Cursor Ring / Glow */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-screen hidden md:block"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'rgba(96, 165, 250, 0.5)' : 'rgba(255, 255, 255, 0.5)'
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8
                }}
            >
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-blue-400/20 rounded-full blur-[2px]"
                    />
                )}
            </motion.div>
        </>
    );
};

export default CustomCursor;
