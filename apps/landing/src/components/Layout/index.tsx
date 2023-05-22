import React from 'react';
import Header from './Header';
import SEO from './Seo';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const Layout = ({ children, title, description }: Props) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
