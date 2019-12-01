import { Global, css } from '@emotion/core';

export const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
      }
    `}
  />
);
