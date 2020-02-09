import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

export const PageLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
