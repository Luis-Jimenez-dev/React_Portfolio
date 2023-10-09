import Image from "next/image";
import Link from "next/link";
import React from "react";
import Route from "../components/changePage";
import Logo from "../../public/img/logo.png";

const navBar: React.FC = () => {
  return (
    <main>
      {/* Header */}
      <div className="space-y-7 justif-center items-center">
        <div className="flex font-bold text-5xl items-left justify-left ml-20 mt-10 space-x-3 hover:no-underline">
          <Link href="/">
            <Image alt="CSUMB Logo" src={Logo} className="w-12 h-12 rounded-2xl" />
          </Link>
          <Link href="/">
            Personal Portfolio
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-10 text-white text-2xl sm:grid-cols-2 md:flex lg:gap-x-5 justify-left ml-20">
          {/* Projects path */}
          <Route title="Projects" path="/projects"/>

          {/* School work Path */}
          <Route title="School Work" path="/schoolWork" />

          {/* Blog */}
          <Route title="Blog" path="/blog" />
        </div>
      </div>
    </main>
  );
};

export default navBar;
