// https://nextjs.org/docs/advanced-features/custom-app

import App from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }) {
    const { title } = pageProps.fetchedData

    return (
        <>
            <Head>
                <title>{title}</title>
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

export default MyApp
