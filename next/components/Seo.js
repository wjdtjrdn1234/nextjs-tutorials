import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

//다양한 props 를 받아서 head component를 customizing 할수있다