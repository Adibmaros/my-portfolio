"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform built with Next.js and xendit integration for secure payments.",
      image: "/assets/projects/image.png",
      liveUrl: "https://ecommerce-byadib.vercel.app/",
      githubUrl: "https://github.com/Adibmaros/bwa-belanja-backup",
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Xendit", "Supabase"],
      category: "aplikasi",
    },
    {
      title: "Filowords App",
      description: "An application featuring a collection of wise, inspirational, and motivational quotes to uplift and broaden perspectives.",
      image: "/assets/projects/image2.png",
      liveUrl: "https://filowords-app.vercel.app/",
      githubUrl: "https://github.com/Adibmaros/filowords-app",
      tech: ["Next js", "Supabase", "Framer Motion"],
      category: "aplikasi",
    },
    {
      title: "Extraordinary Sumsel",
      description: "It is a website created for graduates of Pondok Modern Darussalam Gontor, Extraordinary Generation 2023, South of Sumatera.",
      image: "/assets/projects/image4.png",
      liveUrl: "https://exosumsel.github.io/",
      githubUrl: "#",
      tech: ["HTML 5", "Bootstrap", "jQuery"],
      category: "website",
    },
    {
      title: "Sistem Informasi F'23",
      description: "website of Information Systems F 2023, Islamic State University of Raden Fatah Palembang.",
      image: "/assets/projects/image5.png",
      liveUrl: "https://2383f-web.vercel.app/",
      githubUrl: "#",
      tech: ["Next Js", "Tailwind CSS", "Carousel Feature"],
      category: "website",
    },
    {
      title: "Nuun Bimbel",
      description: "Content Management at instagram @nuun_bimbel.",
      image: "/assets/projects/image7.png",
      liveUrl: "https://www.instagram.com/nuun_bimbel/",
      githubUrl: "#",
      tech: ["Canva", "Lynk.id", "Collage Maker - Grid Art"],
      category: "sosmed management",
    },
    // Tambahkan project lainnya di sini
  ];

  // Dapatkan kategori unik
  const categories = ["all", ...new Set(projects.map((project) => project.category))];

  // State untuk kategori yang aktif
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects berdasarkan kategori yang aktif
  const filteredProjects = activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-600 pb-12">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">My Projects</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Here are some of the projects I've worked on. Feel free to explore!</p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)} className="capitalize">
              {category}
            </Button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Message when no projects match the filter */}
        {filteredProjects.length === 0 && <p className="text-center text-gray-600 dark:text-gray-300 mt-8">No projects found in this category.</p>}
      </div>
    </div>
  );
};

export default Page;
