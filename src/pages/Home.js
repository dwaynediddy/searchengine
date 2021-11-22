import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from '../components/Search'

const getUrl = 'https://api.unsplash.com/photos/?client_id=A13RsenseSkGuc0DjzTySobgM8dliGHSvRVUSaxzwmI'

const Home = () => {
    const [userData, setUserData] = useState([])

    const getUrlWithAxios = async() => {
            const res = await axios.get(getUrl)
            console.log(res.data)
            const data = await res.data
            setUserData(data)
    }
        
        useEffect(() => {
            getUrlWithAxios()
        }, [])

    return (
        <div className="App">
            <Search placeholder="  Search free high-resolution photos"
            //need this data to come from the api
            data={userData} />
        </div>
    )
}

export default Home
