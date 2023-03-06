import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import Layout from "../components/Layouts/Layout";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Youtube from "../components/home/Youtube";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thapa Technical </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />

        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:alt" content="Thapa technical" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Thapa Technical" />
        <meta name="twitter:title" content="Thapa Technical" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>

      <Layout>
        <HeroSection />
        <About />
        <Services />
        <Youtube />
      </Layout>
    </>
  );
}
