import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                    className="absolute w-20 h-20 rounded-full border-2 border-blue-500/30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Rotating Ring */}
                <motion.div
                    className="absolute w-16 h-16 rounded-full border-t-2 border-l-2 border-blue-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Glow */}
                <motion.div
                    className="absolute w-12 h-12 bg-blue-500/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo Text */}
                <motion.div
                    className="relative z-10 font-bold text-white text-2xl tracking-wider"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    P
                </motion.div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
