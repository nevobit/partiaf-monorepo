import { NextPage } from 'next';
import Head from 'next/head';

export type Meta = {
  name: string;
  content: string;
};

export interface Seo {
  description?: string;
  author?: string;
  title?: string;
  lang?: string;
  meta?: Meta[];
}

const SEO: NextPage<Seo> = ({ description, author, title, meta = [] }: Seo) => {
  const metadata = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'og:title',
      content: title,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      name: 'og:type',
      content: 'Prooving',
    },
    {
      name: 'og:site_name',
      content: 'website',
    },
    {
      name: 'author',
      content: author,
    },
  ].concat(meta);

  return (
    <Head>
      {/* <html lang='es-mx' /> */}
      <title>{title} - Partiaf</title>

      {metadata.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="use-credentials"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="canonical" href="https://partiaf.com/" />
    </Head>
  );
};

SEO.defaultProps = {
  lang: 'es-mx',
  meta: [],
};

export default SEO;
