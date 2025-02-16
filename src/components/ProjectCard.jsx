import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, liveUrl, githubUrl, tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <motion.div 
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover md:object-fill"
        />
      </motion.div>
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3 
          className="text-xl font-bold mb-2 text-gray-800 dark:text-white"
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-4"
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
        >
          {tech.map((item, techIndex) => (
            <motion.span 
              key={techIndex}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
        <motion.div 
          className="flex justify-between items-center"
        >
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} />
            Live Preview
          </motion.a>
          <motion.a
            href={githubUrl.length > 2 ? githubUrl : null }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Source Code
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;