import React from 'react';
import {
  Container,
  Heading,
  Text,
  Card,
  Image,
  Box,
} from '@theme-ui/components';
import Glider from 'react-glider';
import faker from 'faker';
import { NextSeo } from 'next-seo';

import { PageLayout } from '../../components/PageLayout';
import { IconLeft } from '../../components/svg/IconLeft';
import { IconRight } from '../../components/svg/IconRight';

const Pane = ({ style, className, image, label }) => (
  <div className={`glider-slide ${className}`} style={style}>
    <Card m={2} p={0} sx={{ overflow: 'hidden' }}>
      <a href="/cv" style={{ display: 'inline-block' }}>
        <Image src={image} title={label} />
        <Text
          as="div"
          sx={{
            height: '6.875em',
            WebkitLineClamp: '5',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            lineHeight: '1.375',
            pt: 1,
            px: 1,
          }}
        >
          {label}
        </Text>
      </a>
    </Card>
  </div>
);

const IndexPage = () => (
  <PageLayout>
    <NextSeo title="Playground" />
    <Container>
      <Glider
        draggable
        hasArrows
        slidesToScroll={5}
        slidesToShow={5}
        iconLeft={
          <Box variant="fab">
            <IconLeft />
          </Box>
        }
        iconRight={
          <Box variant="fab">
            <IconRight />
          </Box>
        }
      >
        <Pane
          image={'https://picsum.photos/seed/1/300/200.webp'}
          label={faker.lorem.sentence()}
        />
        <Pane
          image={'https://picsum.photos/seed/2/300/200.webp'}
          label={faker.lorem.sentence()}
        />
        <Pane
          image={'https://picsum.photos/seed/3/300/200.webp'}
          label={faker.lorem.sentence()}
        />
        <Pane
          image={'https://picsum.photos/seed/4/300/200.webp'}
          label={faker.lorem.sentence()}
        />
        <Pane
          image={'https://picsum.photos/seed/5/300/200.webp'}
          label={faker.lorem.sentence()}
        />
        <Pane
          image={'https://picsum.photos/seed/6/300/200.webp'}
          label={faker.lorem.sentence()}
        />
        <Pane
          image={'https://picsum.photos/seed/7/300/200.webp'}
          label={faker.lorem.sentence()}
        />
        <Pane
          image={'https://picsum.photos/seed/8/300/200.webp'}
          label={faker.lorem.sentence()}
        />
        <Pane
          image={'https://picsum.photos/seed/9/300/200.webp'}
          label={faker.lorem.sentence()}
        />
      </Glider>
    </Container>
  </PageLayout>
);

export default IndexPage;
