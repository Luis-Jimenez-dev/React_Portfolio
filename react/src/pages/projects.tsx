import Image from 'next/image'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Navbar from '../components/navBar';
import Layout from '../components/Layout';

const Projects: React.FC = () =>{
    return (
        <main>
            {/* Navigation Bar */}
            <Navbar />
        </main>
      );
};


export default Projects;