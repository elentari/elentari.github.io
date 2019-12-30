import { DefaultSeo } from 'next-seo';
import { ThemeProvider, Styled } from 'theme-ui';
import Head from 'next/head';

import 'glider-js/glider.min.css';

import SEO from '../../next-seo.config';
import theme from '../theme';
import { GlobalStyle } from '../components/GlobalStyle';

const ElentariApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <DefaultSeo {...SEO} />
    <Styled.root>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Styled.root>
  </ThemeProvider>
);

export default ElentariApp;
