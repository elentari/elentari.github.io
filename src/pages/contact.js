import React from 'react';
import {
  Container,
  Heading,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Box,
  Flex,
  Button,
} from '@theme-ui/components';

import { NextSeo } from 'next-seo';
import { PageLayout } from '../components/PageLayout';
import { Dummy } from '../components/core/Dummy';
import { IconEmailBig } from '../components/svg/IconEmailBig';

function ContactPage() {
  return (
    <PageLayout>
      <NextSeo title="Contact" />
      <Container sx={{ maxWidth: '600px' }}>
        <IconEmailBig
          sx={{
            color: 'primary',
            path: { fill: 'currentColor' },
            width: '150px',
            mx: 'auto',
            mb: 3,
            display: 'block',
          }}
        />
        <Heading as="h1" sx={{ textAlign: 'center', mb: 3, fontSize: 5 }}>
          Contact
        </Heading>
        <Box pb={5} as="form" onSubmit={e => e.preventDefault()}>
          <Label htmlFor="name">Name</Label>
          <Input placeholder="Name..." name="name" id="name" mb={3} />
          <Label htmlFor="email">E-Mail</Label>
          <Input placeholder="E-Mail..." name="email" id="email" mb={3} />
          <Label htmlFor="subject">Subject</Label>
          <Input placeholder="Subject..." name="subject" id="subject" mb={3} />
          <Label htmlFor="message ">Message</Label>
          <Textarea
            placeholder="Your message..."
            name="message "
            rows="6"
            id="message"
            mb={3}
          />
          <Button>Submit</Button>
        </Box>
      </Container>
    </PageLayout>
  );
}

export default ContactPage;
