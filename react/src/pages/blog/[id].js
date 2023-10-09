import Layout from '../../components/blogLayout';
import { getAllPostIds, getPostData } from '../../lib/blog';
import Date from '../../components/date';
import Head from 'next/head';
import markdownStyles from '../../styles/markdown.module.css';

export default function Post ({ postData }) {
    return (
        <Layout>
            <Head>
                <title> {postData.title} </title>
            </Head>
            <div className='flex flex-col items-center mt-10'>
            <article className='w-4/5 gradient-background'>
                <h1 className='text-3xl ml-2'> {postData.title} </h1>
                <div className='text-xl underline underline-offset-8 decoration-4 ml-2'>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} className={`${markdownStyles.markdown}`}/>
            </article>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return{
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}