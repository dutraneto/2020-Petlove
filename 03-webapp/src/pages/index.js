import axios from 'axios'
import React from 'react'

import Main from 'components/Main'

const Home = () => {
    const [API] = React.useState('http://localhost:3000/api')
    const [data, setData] = React.useState('')

    // Request endpoint
    React.useEffect(() => {
        const fetchAPI = async () => {
            try {
                const api = await axios.get(API)
                setData(api.data[0])
            } catch (error) {
                console.log('Could not get requested data')
            }
        }
        fetchAPI()
    }, [API])
    return <Main {...data} />
}

export default Home
