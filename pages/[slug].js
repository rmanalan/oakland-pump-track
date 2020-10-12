import Layout from "../components/layout";
import Head from "next/head";
import { getContentData, getAllContentSlugs } from "../lib/mdContent";
import { getGalleryImages } from "../lib/galleryImages";

export default function Page({ pageData, imagePaths }) {
  return (
    <Layout imagePaths={imagePaths}>
      <Head>
        <title>Oakland Pump Track: {pageData.title}</title>
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
  return {
    props: {
      pageData: await getContentData(params.slug),
      imagePaths: await getGalleryImages(),
    },
  };
}
