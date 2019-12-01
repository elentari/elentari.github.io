import React from 'react';
import { Container, Heading } from '@theme-ui/components';

import { NextSeo } from 'next-seo';
import { PageLayout } from '../components/PageLayout';

const ContactPage = () => (
  <PageLayout>
    <NextSeo title="Contact" />
    <Container>
      <Heading>Contact</Heading>
    </Container>
  </PageLayout>
);

export default ContactPage;
