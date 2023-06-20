import React from 'react';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, Builder, withChildren, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Replace with your Public API Key
builder.init("6fe2db1df8404738be3cd2529a2b6bbe");

export async function getStaticProps({ params }: any) {
  // Fetch the builder content
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5
  };
}

export async function getStaticPaths() {
  // Get a list of all pages in builder
  const pages = await builder.getAll('page', {
    // We only need the URL field
    fields: 'data.url', 
    options: { noTargeting: true },
  });

  return {
    paths: pages.map(page => `${page.data?.url}`),
    fallback: true,
  };
}

Builder.registerComponent(
  dynamic(() =>
    import('../components/Hero').then(module => {
      return withChildren(module.Hero as React.ComponentType);
    })
  ),
  {
    name: 'Hero',
    inputs: [
      { name: 'title', type: 'text' },
      { name: 'subtitle', type: 'text' },
      { name: 'buttonText', type: 'text' },
      { name: 'buttonLink', type: 'text' },
      {
        name: 'logos',
        type: 'list',
        subFields: [
          {
            name: 'company',
            type: 'text',
            defaultValue: 'New tab',
          },
          {
            name: 'svg',
            type: 'file',
            allowedFileTypes: ['svg'] 
          },
          {
            name: 'width',
            type: 'number',
            defaultValue: 50,
          },
          {
            name: 'height',
            type: 'number',
            defaultValue: 50,
          },
          {
            name: 'showOnMobile',
            type: 'boolean',
            defaultValue: true,
          }
        ],
        defaultValue: [
          {
            company: 'Company 1',
            svg: 'https://upload.wikimedia.org/wikipedia/commons/0/09/America_Online_logo.svg',
            width: 50,
            height: 50,
            showOnMobile: true,
          },
        ],
      },
    ],
    defaultChildren: [
      { 
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Text', options: { text: 'I am child text block!' } }
      }
    ]
  }
)

Builder.registerComponent(
  dynamic(() =>
    import('../components/Features').then(module => {
      return withChildren(module.Features as React.ComponentType);
    })
  ),
  {
    name: 'Features',
  }
)

Builder.registerComponent(
  dynamic(() =>
    import('../components/BlogPreview').then(module => {
      return withChildren(module.BlogPreview as React.ComponentType);
    })
  ),
  {
    name: 'BlogPreview',
  }
)

export default function Page({ page }: any) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
        <meta
          name="description"
          content="Time to eat some credit cards!"
        />
      </Head>
      <Header />
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />
      <Footer />
    </>
  );
}