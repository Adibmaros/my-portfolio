import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className='md:h-[400px] h-auto relative px-6 md:px-20 py-10'>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 h-full text-center md:text-left">
                {/* Kontainer teks dengan animasi */}
                <motion.div 
                    className="flex-1 md:px-10 rounded w-full"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.p 
                        className="text-3xl md:text-4xl text-black dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi There!
                    </motion.p>
                    <motion.p 
                        className="text-2xl md:text-3xl mt-3 mb-6 text-black dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        I am a <span className="text-blue-500 dark:text-blue-300">full stack web developer</span>
                    </motion.p>
                    
                    {/* Buttons dengan animasi */}
                    <motion.div 
                        className="flex gap-2 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Button>Hire me</Button>
                        <Button variant="outline">Download CV</Button>
                    </motion.div>
                    
                    {/* Social icons dengan animasi */}
                    <motion.div 
                        className="flex gap-4 mt-7 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[
                            { icon: <Github className="text-black" />, href: "https://github.com/Adibmaros/" },
                            { icon: <Youtube className="text-red-500" />, href: "https://www.youtube.com/@codewithadibb" },
                            { icon: <Linkedin className="text-blue-500" />, href: "https://www.linkedin.com/in/adib-maros-9826191b0/" },
                            { icon: <Instagram className="text-orange-500" />, href: "https://www.linkedin.com/in/adib-maros-9826191b0/" }
                        ].map((social, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Link href={social.href}>
                                    {social.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Kontainer gambar dengan animasi */}
                <motion.div 
                    className="w-[200px] h-[200px]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Image
                        className="rounded-full object-cover"
                        width={500}
                        height={500}
                        src="/assets/hero1.jpg"
                        alt="Hero Image"
                        priority
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;