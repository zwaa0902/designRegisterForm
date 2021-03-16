import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { GlobalStyles, theme } from '@/styles/GlobalStyles';
import { AuthProvider } from '@/contexts/Auth';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MyApp;
