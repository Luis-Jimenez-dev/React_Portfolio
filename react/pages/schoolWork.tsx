import Image from "next/image";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navbar from "../components/navBar";

const Projects: React.FC = () => {
  return (
    <main className="text-center">
      {/* Navigation Bar */}
      <Navbar />

      <div className="flex flex-col items-center mt-8">
        <div className="text-3xl font-bold">
            School Work
        </div>
        <div className="mt-5 w-2/5 text-center">
          During my studies at CSUMB I studied many areas of Computer Science
          Such as Networking, Operating Systems, Software Engineering and
          Design, Database Management and other areas. This is a collection of
          some of my class assignments and what was learned and expected as a
          student.
        </div>
      </div>
    </main>
  );
};

export default Projects;
