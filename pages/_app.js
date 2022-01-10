import { Global, css } from "@emotion/react";

const globalCss = css`
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
