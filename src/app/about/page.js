import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-600 ">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white">About Me</h1>

        <div className="mt-6 text-black dark:text-white">
          <p className="text-lg">
            Hi! I'm <span className="font-semibold text-blue-500">Adib Maros</span>, a passionate full-stack web developer who specializes in creating dynamic and interactive web applications. With a love for coding, I'm always eager to
            explore new technologies and frameworks.
          </p>

          <p className="mt-4 text-lg">
            Over the years, I've honed my skills in both frontend and backend development, working with technologies like
            <span className="font-semibold text-blue-500"> React.js, Next.js, Node.js, and MongoDB</span>. I enjoy solving complex problems and bringing innovative ideas to life through clean, efficient code.
          </p>

          <h2 className="text-2xl mt-8 font-semibold text-black dark:text-white">My Journey</h2>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet ex nec risus varius, in suscipit metus dapibus. Curabitur vulputate viverra nibh sit amet venenatis. Nunc gravida orci leo, vel aliquet lectus venenatis
            eget. Sed aliquet euismod tincidunt. Morbi tristique nulla vel libero tincidunt, sed cursus turpis fermentum. Nulla facilisi.
          </p>

          <h2 className="text-2xl mt-8 font-semibold text-black dark:text-white">Skills & Technologies</h2>
          <ul className="list-disc pl-5 mt-4 text-lg">
            <li>Frontend: React.js, Next.js, Tailwind CSS, HTML, CSS</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>Version Control: Git, GitHub</li>
            <li>Other: REST APIs, GraphQL, Firebase, Testing (Jest, Cypress)</li>
          </ul>

          <h2 className="text-2xl mt-8 font-semibold text-black dark:text-white">Let's Connect</h2>
          <p className="mt-4 text-lg">I'm always open to new opportunities and collaborations. Feel free to reach out through my social media profiles or email. Looking forward to connecting with you!</p>
        </div>
      </div>
    </div>
  );
};

export default page;
