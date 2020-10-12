import Layout from "../components/layout";
import Link from "next/link";
import Head from "next/head";
import { getContentData } from "../lib/mdContent";
import { getGalleryImages } from "../lib/galleryImages";

export default function Home({ pageData, imagePaths }) {
  return (
    <Layout imagePaths={imagePaths}>
      <Head>
        <title>Oakland Pump Track</title>
      </Head>
      <article>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      pageData: await getContentData("home"),
      imagePaths: await getGalleryImages(),
    },
  };
}
