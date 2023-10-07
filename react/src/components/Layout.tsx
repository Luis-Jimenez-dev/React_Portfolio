import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navBar';

const name = "Luis Jimenez";
export const siteTitle = "Luis Jimenez's Portfolio";

export default function Layout ({ children, home} : {children:any , home:any}){
    return(
        <div className={styles.container}>
        <Head>
            <title> {`Luis Jimenez's Portfolio`} </title>
        </Head>
        <header className={styles.header}>
            {home ? (
                <Navbar />
                ): (
                    <Navbar />
                )}
        </header>
        <main>{children}</main>
        {!home &&(
            <div className="ml-20 m-10 text-l font-bold hover:underline">
                <Link href='/schoolWork'> Back to School Work </Link>
            </div>
        )}
    </div>
    )
}