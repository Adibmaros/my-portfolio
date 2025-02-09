"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className=" min-h-screen bg-gray-300 dark:bg-gray-800">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
