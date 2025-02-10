"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import ProjectCard from "@/components/ProjectCard";

const page = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform built with Next.js and xendit integration for secure payments.",
      image: "/assets/projects/image.png",
      liveUrl: "https://ecommerce-byadib.vercel.app/",
      githubUrl: "https://github.com/Adibmaros/bwa-belanja-backup",
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Xendit", "Supabase"],
    },
    {
      title: "Filowords App",
      description: "An application featuring a collection of wise, inspirational, and motivational quotes to uplift and broaden perspectives.",
      image: "/assets/projects/image2.png",
      liveUrl: "https://filowords-app.vercel.app/",
      githubUrl: "https://github.com/Adibmaros/filowords-app",
      tech: ["Next js", "Supabase"],
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates and team collaboration features.",
      image: "/api/placeholder/800/600",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      tech: ["React", "Firebase", "Material-UI"],
    },
    // Tambahkan project lainnya di sini
  ];

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-600 pb-12">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">My Projects</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Here are some of the projects I've worked on. Feel free to explore!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
