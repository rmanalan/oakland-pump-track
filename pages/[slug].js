import Layout from "../components/layout";
import Head from "next/head";
import { getContentData, getAllContentSlugs } from "../lib/mdContent";

export default function Page({ pageData }) {
  return (
    <Layout>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <article>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageData = await getContentData(params.slug);
  return {
    props: {
      pageData,
    },
  };
}
