// pages/[slug].js
import { getFiles, getFileBySlug } from '@lib/mdx';
import MDXLayout from '@components/MDXLayout';

export default function Page({ mdxSource }) {
  return (
    <MDXLayout>
      <MDXContent {...mdxSource} />
    </MDXLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('mdx'); // Adjust the path to your MDX files
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const mdxSource = await getFileBySlug('mdx', params.slug); // Adjust the path to your MDX files

  return {
    props: {
      mdxSource,
    },
  };
}
