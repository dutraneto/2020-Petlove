import axios from 'axios'
import React from 'react'

import Layout from 'components/Layout'

const Home = (props) => {
    const [data, setData] = React.useState(props.fetchedData)
    return <Layout {...data} />
}

export async function getStaticProps() {
    const API = 'http://localhost:3000/api'
    try {
        const fetch = await axios.get(API)
        const fetchedData = await fetch.data[0]
        return { props: { fetchedData } }
    } catch (error) {
        console.log('Could not get requested data')
    }
}

export default Home
