// https://nextjs.org/docs/advanced-features/custom-app

import App from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Petlove - 2020</title>
                <link rel='shortcut icon' href='/images/favicon.png' />
                <link rel='apple-touch-icon' href='/images/tile-512X512.png' />
                <link rel='apple-touch-icon' href='/images/tile-192X192.png' />
                <meta
                    name='description'
                    content='Project starter for Petlove 2020 using React, NextJs and styled components'
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
