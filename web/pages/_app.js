import { ThemeProvider } from "styled-components";
import Theme from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import TypographyStyles from "@styles/TypographyStyles";

function Application({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <TypographyStyles />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default Application;
