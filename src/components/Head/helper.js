import React from 'react';
import Head from './index';

export const CreateHead = ({
  title = 'Galatasaray',
  description = 'Galatasaray subscription on the shelf',
  image = '',
  url = '',
}) => (
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#111111" />

    <meta property="og:title" content={title} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="article" />

    <meta name="twitter:card" content={image} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);
