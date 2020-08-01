import Head from 'next/head'
import useSWR from 'swr'
import Item from '../components/Item/Item'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/product', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className='container'>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <ul>
                    {data.map((p, i) => (
                        <Item key={i} item={p} />
                    ))}
                </ul>
            </main>
        </div>
    )
}
