import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navBar';

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
        <main>{children}</main>
        {!home &&(
            <div className="ml-20 m-10 text-l font-bold hover:underline">
                <Link href='/projects'> Back to Projects </Link>
            </div>
        )}
    </div>
    )
}