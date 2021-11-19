import React from 'react'
import Search from '../components/Search'
import dummyData from '../dummyData.json'

const Home = () => {
    return (
        <div>
            <Search placeholder="    Search free high-resolution photos"
            data={dummyData} />
        </div>
    )
}

export default Home
