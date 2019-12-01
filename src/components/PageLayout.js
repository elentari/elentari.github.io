import React from 'react';
import { Layout, Main } from 'theme-ui';

import { Header } from './Header';
import { Footer } from './Footer';

export const PageLayout = ({ children }) => (
  <Layout>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Layout>
);
