import axios from 'axios'
import React from 'react'

import Layout from 'components/Layout'

import { DataContext } from 'context/DataContext'

const Home = (props) => {
    const [data, setData] = React.useState(props.fetchedData)

    return (
        <DataContext.Provider value={data}>
            <Layout />
        </DataContext.Provider>
    )
}

export async function getStaticProps() {
    const localAPI = 'http://localhost:3000/api'
    const webAPI = 'https://testapi.io/api/dutraneto/petlove/v1'
    const URL = webAPI || localAPI
    try {
        const fetcher = await axios.get(URL).then((res) => res.data)
        const fetchedData = await fetcher[0]
        return { props: { fetchedData } }
    } catch (error) {
        console.log('Could not get requested data')
    }
}

export default Home
