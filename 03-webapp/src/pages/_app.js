// https://nextjs.org/docs/advanced-features/custom-app

import App from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <noscript>
                    <div className='alert alert-danger' role='alert'>
                        You need to enable JavaScript to run this app.
                    </div>
                </noscript>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, viewport-fit=cover'
                />
                <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
                <title>Petlove</title>
                <link rel='shortcut icon' href='/images/favicon.png' />
                <link rel='apple-touch-icon' href='/images/tile-512X512.png' />
                <link rel='apple-touch-icon' href='/images/tile-192X192.png' />
                <meta name='description' content='Your smartest way to buy pet stuffs' />
                <meta name=' keywords' content='e-commerce, pets' />
                <meta name='robots' content='index, follow' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='black' />
                <meta name='theme-color' content='black' />
                <meta name='msapplication-config' content='browserconfig.xml' />
                <link rel='canonical' href='' />
                <link rel='manifest' href='/manifest.json' />
                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://petlove.com' />
                <meta property='og:title' content='PetLove' />
                <meta property='og:image' content='' />
                <meta property='og:description' content='Your smartest way to buy pet stuffs' />
                <meta
                    property='og:site_name'
                    content='PetLove - Your smartest way to buy pet stuffs'
                />
                <meta property='og:locale' content='en_US' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:site' content='@petlove' />
                <meta name='twitter:creator' content='@glacial' />
                <meta name='twitter:url' content='https://petlove.com' />
                <meta name='twitter:title' content='Your smartest way to buy pet stuffs' />
                <meta
                    name='twitter:description'
                    content='PetLove - Your smartest way to buy pet stuffs'
                />
                <meta
                    name='twitter:image'
                    content='http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg'
                />
                <link
                    href='https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:300,500,700|Unna:400,700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
