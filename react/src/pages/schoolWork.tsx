import Head from "next/head";
import Link from "next/link";
import { getAllPostIds, getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import React, { useEffect } from "react";
import Layout from "@/components/Layout";

interface PostData {
  id: string;
  date: string;
  title: string;
}

interface ProjectsProps {
  allPostsData: PostData[]; // Define the type for allPostsData
}

const Projects: React.FC<ProjectsProps> = ({allPostsData}) => {
  return (
    <Layout home>
      <main>

        <div className="flex flex-col items-center mt-8">
          <div className="w-3/5 gradient-background">
          <div className="text-3xl text-center font-bold">School Work</div>
          <div className="m-5 text-center">
            During my studies at CSUMB I studied many areas of Computer Science
            Such as Networking, Operating Systems, Software Engineering and
            Design, Database Management and other areas. This is a collection of
            some of my class assignments, what was learned and what was expected as a
            student.
          </div>
          <div>
            <ul className="mt-10 flex flex-wrap">
              {allPostsData.map(({ id, date, title }) => (
                <li key={id} className="m-12">
                  <Link href={`/posts/${id}`} className="link"> {title} </Link>
                  <br/>
                  <small>
                    <Date dateString = {date} />
                  </small>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  const paths = getAllPostIds();

  return {
    props: {
      allPostsData,
    },
  };
}

export default Projects;
