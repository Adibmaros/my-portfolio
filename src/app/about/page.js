"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillsVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (item) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: item * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-600 pb-2">
      <Navbar />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl md:mx-auto mx-4 p-6 md:my-4 my-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-4xl font-bold text-center text-black dark:text-white">
          About Me
        </motion.h1>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-6 text-black dark:text-white">
          <motion.p variants={itemVariants} className="text-lg">
            Hi! I'm{" "}
            <motion.span whileHover={{ scale: 1.1 }} className="font-semibold text-blue-500 inline-block">
              Adib Maros
            </motion.span>
            , a passionate full-stack web developer who specializes in creating dynamic and interactive web applications. With a love for coding, I'm always eager to explore new technologies and frameworks.
          </motion.p>

          <motion.p variants={itemVariants} className="mt-4 text-lg">
            Over the years, I've honed my skills in both frontend and backend development, working with technologies like
            <motion.span whileHover={{ scale: 1.05 }} className="font-semibold text-blue-500">
              {" "}
              React.js, Next.js, Node.js, MongoDB, Supabase and others
            </motion.span>
            . I enjoy solving complex problems and bringing innovative ideas to life through clean, efficient code.
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-2xl mt-8 font-semibold text-black dark:text-white">
            My Journey
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet ex nec risus varius, in suscipit metus dapibus. Curabitur vulputate viverra nibh sit amet venenatis. Nunc gravida orci leo, vel aliquet lectus venenatis
            eget.
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-2xl mt-8 font-semibold text-black dark:text-white">
            Skills & Technologies
          </motion.h2>
          <motion.ul className="list-disc pl-5 mt-4 text-lg">
            {["Frontend: React.js, Next.js, Tailwind CSS, HTML, CSS", "Backend: Node.js, Express.js, MongoDB", "Version Control: Git, GitHub", "Other: REST APIs, Firebase, Testing (Jest)"].map((skill, index) => (
              <motion.li key={index} custom={index} variants={skillsVariants} whileHover={{ x: 10, transition: { duration: 0.2 } }} className="my-2">
                {skill}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2 variants={itemVariants} className="text-2xl mt-8 font-semibold text-black dark:text-white">
            Let's Connect
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-lg" whileHover={{ scale: 1.01 }}>
            I'm always open to new opportunities and collaborations. Feel free to reach out through my social media profiles and others. Looking forward to connecting with you!
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
