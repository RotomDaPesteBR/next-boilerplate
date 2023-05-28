import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import usePersistedState from '../utils/usePersistedState';

function MyApp({ Component, pageProps: { ...pageProps } }) {
  const [theme, setTheme] = usePersistedState('theme', dark);

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <ThemeProvider theme={theme}>
      <Component toggleTheme={() => toggleTheme()} {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
