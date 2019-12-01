import React from 'react';
import { Container, Heading } from '@theme-ui/components';

import { NextSeo } from 'next-seo';
import { PageLayout } from '../components/PageLayout';

const CVPage = () => (
  <PageLayout>
    <NextSeo title="CV" />
    <Container>
      <Heading>CV</Heading>
    </Container>
  </PageLayout>
);

export default CVPage;
