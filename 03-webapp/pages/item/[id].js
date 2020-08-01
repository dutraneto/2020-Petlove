import { useRouter } from 'next/router'
import useSWR from 'swr'

// https://github.com/vercel/next.js/blob/canary/examples/api-routes/pages/person/%5Bid%5D.js

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

const Item = () => {
    const { query } = useRouter()
    const { data, error } = useSWR(() => query.id && `/api/product/${query.id}`, fetcher)

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return console.log(data)
}

export default Item
