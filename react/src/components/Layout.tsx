import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navBar';
import { Analytics } from '@vercel/analytics/react';

const name = "Luis Jimenez";
export const siteTitle = "Luis Jimenez's Portfolio";

export default function Layout ({ children, home} : {children:any , home:any}){
    return(
        <div>
        <Head>
            <title> {`Luis Jimenez's Portfolio`} </title>
            <link rel="shortcut icon" href="/logo.ico"></link>
        </Head>
        <header>
            {home ? (
                <Navbar />
                ): (
                    <Navbar />
                )}
        </header>
        <main>
            {children}
            <Analytics />
        </main>
        {!home &&(
            <div className="ml-20 m-10 text-l font-bold hover:underline">
                <Link href='/schoolWork'> Back to School Work </Link>
            </div>
        )}
    </div>
    )
}