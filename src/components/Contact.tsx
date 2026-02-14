import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:officialparvsharma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-24 relative" id="contact">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-16 shadow-2xl shadow-black/40"
                >
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 hover:hue-rotate-90 transition-all duration-500 cursor-default pb-2">
                            Let's Work Together
                        </h2>
                        <p className="text-gray-400 text-lg">Have a project in mind? Let's build something amazing.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                        <div className="space-y-10">
                            {[
                                { icon: Mail, title: "Email", value: "Officialparvsharma@gmail", href: "mailto:officialparvsharma@gmail.com", color: "bg-blue-500/20 text-blue-400" },
                                { icon: Phone, title: "Phone", value: "+91 88009 74466", href: "tel:+918800974466", color: "bg-purple-500/20 text-purple-400" },
                                { icon: MapPin, title: "Location", value: "Noida, India", href: "https://www.google.com/maps/place/Noida,+Uttar+Pradesh", color: "bg-pink-500/20 text-pink-400" }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? "_blank" : undefined}
                                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="flex items-center space-x-6 group cursor-pointer"
                                >
                                    <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-200 mb-1">{item.title}</h3>
                                        <p className="text-gray-400 group-hover:text-blue-300 transition-colors">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-500"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-500"
                                    required
                                />
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-500 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 bg-white text-black rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
