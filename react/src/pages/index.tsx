import Image from "next/image";
import Layout from "../components/Layout";
import React from "react";
import Head from 'next/head';
import Profilepic from "../../public/img/profile.jpg";
import GitHub from "../../public/img/github-mark-white.png";
import LinkedIn from "../../public/img/LinkedIn.png";
import EmailLogo from "../../public/img/emailLogo.png";

const Home: React.FC = () => {
  return (
    <Layout home>
      <main className="text-center">
        {/* Container for data displayed */}
        <div className="flex flex-col items-center">
          {/* Container for Profile Picture */}
          <div className="relative w-32 h-32">
            <Image
              alt="Picture of myself"
              src={Profilepic}
              layout="fill"
              objectFit="cover"
              className="rounded-full border border-gray-100 shadow-sm"
            />
          </div>

          {/* Container for github, linkedin, and email */}
          <div className="flex justify-center pt-2 mt-6 space-x-6">
            {/* Links to my GitHub */}
            <a
              href="https://github.com/Luis-Jimenez-dev"
              target="_blank"
              className="w-10 h-10"
            >
              <Image alt="GitHub button" src={GitHub} />
            </a>

            {/* Links to my LinkedIn */}
            <a
              href="https://www.linkedin.com/in/luis-jimenez-368134220/"
              target="_blank"
              className="w-12 h-12"
            >
              <Image alt="LinkedIn button" src={LinkedIn} />
            </a>

            {/* Opens email app */}
            <a href="mailto:jimenezluis36039@gmail.com" className="w-12 h-12">
              <Image alt="Email button" src={EmailLogo} />
            </a>
          </div>

          {/* Container for About Me and Description */}
          <div className="flex flex-col items-center mt-9">
            <div className="gradient-background w-3/5">
            <div className="text-xl font-bold">
              <h2>About Me</h2>
            </div>
            <div className="mt-4 text-lg">
              Hello, I am a recent graduate from California State
              University-Monterey Bay (CSUMB), and this is a website containing
              most of my major work done during my studies as well as some
              personal projects. Currently, I live in Salinas, CA, and am
              looking to become a full-stack software engineer. The languages I
              am most comfortable with are C++ and JavaScript (Express, React).{" "}
              <br />
              <br />
              Before I decided to start studying Computer Science, I had always
              been intrested in how technology was designed and created. This
              was futher developed when in high school I had engineering as an
              elective and had my first experience with coding where I
              programmed a small car to move in various directions.
              Unfortunately, I did not stay in the same school and in my new
              school there was no engineering elective. It wasnt until I got
              into college where I decided that I was going to major in Computer
              Science and begin my journey to being a Software Engineer.
            </div>
            </div>
          </div>
        </div>

        {/* TODO: Footer */}
      </main>
    </Layout>
  );
};

export default Home;
