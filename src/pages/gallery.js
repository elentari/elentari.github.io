import React from 'react';
import { Container, Heading } from '@theme-ui/components';

import { NextSeo } from 'next-seo';
import { PageLayout } from '../components/PageLayout';

function GalleryPage() {
  return (
    <PageLayout>
      <NextSeo title="Gallery" />
      <Container>
        <Heading>Gallery</Heading>
      </Container>
    </PageLayout>
  );
}

export default GalleryPage;
