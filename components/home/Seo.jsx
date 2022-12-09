import React from "react";
import Head from "next/head";

const Seo = () => {
  return (
    <>
      <Head>
        <title>Airos — Web Design and creation</title>
        <meta name="title" content="Airos — Web Design and creation" />
        <meta
          name="description"
          content="Get your
business online - We create engaing and dynamic designs to captivate your audience and convert viewers into buyers. Your website is the face of your business, we make sure it makes a good impression. We design and develop your website at no cost, we only charge for hosting and matienence."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Airos — Web Design and creation" />
        <meta
          property="og:description"
          content="Get your
business online - We create engaing and dynamic designs to captivate your audience and convert viewers into buyers. Your website is the face of your business, we make sure it makes a good impression. We design and develop your website at no cost, we only charge for hosting and matienence."
        />
        <meta property="og:image" content="/meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta
          property="twitter:title"
          content="Airos — Web Design and creation"
        />
        <meta
          property="twitter:description"
          content="Get your
business online - We create engaing and dynamic designs to captivate your audience and convert viewers into buyers. Your website is the face of your business, we make sure it makes a good impression. We design and develop your website at no cost, we only charge for hosting and matienence.

"
        />
        <meta property="twitter:image" content="/meta.png" />
      </Head>
    </>
  );
};

export default Seo;
