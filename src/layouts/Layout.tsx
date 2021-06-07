import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({
  children,
  title = 'This is the default title',
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        <div> {children} </div>
        <Footer />
      </body>
    </>
  );
};
