import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Route from "../components/changePage";
import CSUMB from "../public/img/csumb.png";

const navBar: React.FC = () => {
  return (
    <main>
      {/* Header */}
      <div className="space-y-7 justif-center items-center">
        <div className="flex font-bold text-5xl items-left justify-left ml-20 mt-10 space-x-3 hover:no-underline">
          <Link href="/">
            <Image alt="CSUMB Logo" src={CSUMB} className="w-12 h-12" />
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
