import React, { useState } from 'react'
import axios from "axios"

import '../style/search.css'
import Title from '../components/Title'
import Trending from '../components/Trending'

import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const getUrl = 'https://api.unsplash.com/photos/?client_id=A13RsenseSkGuc0DjzTySobgM8dliGHSvRVUSaxzwmI'

const Search = ({ placeholder, data }) => {
    const [filterData, setFilterData] = useState([])
    const [enteredData, setEnteredData] = useState('')
    
    const handleFilter = (e) => {
        const searchInput = e.target.value
        setEnteredData(searchInput)
        const newFilter = data.filter((value) => {
            return value.user.username.toLowerCase().includes(searchInput.toLowerCase())
        })
        if(searchInput === '') {
            setFilterData([])
        } else {
            setFilterData(newFilter) 
        }
    }

    const handleClose = () => {
        setFilterData([])
        setEnteredData('')
    }

    const handleKeyPress = async() => {
        const res = await axios.get(getUrl)
        console.log(res.data)
        const data = await res.data
        setFilterData(data)
    }

    return (
        <div className="search">
            <Title />
            <div className="searchInputs">
                <div className="searchIcon"><SearchIcon /></div>
                <input 
                type="text"
                placeholder={placeholder}
                value={enteredData}
                onChange={handleFilter}
                // onKeyPress={handleKeyPress}
                // onSubmit={handleSubmit}
                />
                {
                filterData.length === 0 ? '' 
                : 
                <div className="closeIcon">
                    <CloseIcon className='closeIcon' onClick={handleClose}/>
                </div>
                }
                <button onClick={handleKeyPress}>test</button>
            </div>
            {/* make 3 or more letters until anything appears */}
            {filterData.length !== 0 && (
            <div className="dataResult">
                {filterData.slice(0, 10).map((value, key) => {
                    return (
                        <a className='dataItem' href={value.urls.regular} target='_blank' rel="noopener noreferrer">
                            <p>{value.user.name}</p> 
                        </a>
                    )
                })}
            </div>
            )}
            <Trending />
        </div>
    )
}

export default Search

