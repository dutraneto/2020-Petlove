import axios from 'axios'
import React from 'react'

import Layout from 'components/Layout'

import { DataContext } from 'context/DataContext'

const URL = 'https://testapi.io/api/dutraneto/petlove/v1'

const fetcher = (URL) => axios.get(URL).then((res) => res.data[0])

export async function getStaticProps() {
    try {
        const initialProps = await fetcher(URL)
        return { props: { initialProps } }
    } catch (error) {
        console.log('Could not get requested data')
    }
}

const Home = ({ initialProps }) => {
    if (Object.keys(initialProps).length === 0)
        return <h3 className='u-pd-sm u-m-md'>Loading...</h3>

    return (
        <DataContext.Provider value={initialProps}>
            <Layout />
        </DataContext.Provider>
    )
}

export default Home
