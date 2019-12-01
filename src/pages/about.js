import React from 'react';
import { Container, Heading } from '@theme-ui/components';

import { NextSeo } from 'next-seo';
import { PageLayout } from '../components/PageLayout';

const AboutPage = () => (
  <PageLayout>
    <NextSeo title="About" />
    <Container>
      <Heading>About</Heading>
    </Container>
  </PageLayout>
);

export default AboutPage;
