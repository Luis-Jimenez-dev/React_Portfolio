import Link from "next/link";
import { getAllPostIds, getSortedPostsData } from '../lib/projects';
import Date from '../components/date';
import React, { useEffect } from "react";
import Layout from "@/components/projectLayout";

interface PostData {
  id: string;
  date: string;
  title: string;
  description: string;
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
          <div className="text-5xl text-center font-bold"> Projects </div>
          <div className="flex flex-wrap">
            <ul>
              {allPostsData.map(({ id, date, title, description }) => (
                <li key={id} className="ml-12 mt-5">
                  <Link href={`/projects/${id}`} className="link"> {title} </Link>
                  <br/>
                  <small>
                    <Date dateString = {date} />
                  </small>
                  <br/>
                  <div className="text-l m-3 mt-0">{description}</div>
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
