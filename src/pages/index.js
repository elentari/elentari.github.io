import React from 'react';
import { Container, Heading, Text } from '@theme-ui/components';

import { NextSeo } from 'next-seo';
import { PageLayout } from '../components/PageLayout';

const IndexPage = () => (
  <PageLayout>
    <NextSeo title="Home" />
    <Container>
      <Heading>Hi people</Heading>
      <Text as="p">Welcome to my cool site.</Text>
    </Container>
  </PageLayout>
);

export default IndexPage;
