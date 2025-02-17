"use client";

import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { sanityClient, getProjects, getProjectsByCategory, getProjectCategories } from "@/lib/sanity"; // Assuming the first snippet is in lib/sanity.js

const Page = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(["all"]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch all projects initially
        const allProjects = await getProjects();
        setProjects(allProjects);

        // Fetch unique categories and add 'all' option
        const projectCategories = await getProjectCategories();
        const uniqueCategories = ["all", ...new Set(projectCategories)];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredProjects = async () => {
      try {
        setLoading(true);
        if (activeCategory === "all") {
          const allProjects = await getProjects();
          setProjects(allProjects);
        } else {
          const filteredProjects = await getProjectsByCategory(activeCategory);
          setProjects(filteredProjects);
        }
      } catch (error) {
        console.error("Error fetching filtered projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProjects();
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-600 pb-12">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">My Projects</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Here are some of the projects I've worked on. Feel free to explore!</p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)} className="capitalize">
              {category}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-gray-600 dark:text-gray-300">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project._id || index} {...project} />
            ))}
          </div>
        )}

        {!loading && projects.length === 0 && <p className="text-center text-gray-600 dark:text-gray-300 mt-8">No projects found.</p>}
      </div>
    </div>
  );
};

export default Page;
