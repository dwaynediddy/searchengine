import React, { useState, useEffect } from 'react'
import axios from "axios"

import '../style/search.css'
import Title from '../components/Title'
import Trending from '../components/Trending'
import Images from'../components/Images'

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
            return value.user.name.toLowerCase().includes(searchInput.toLowerCase())
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

    // selected images render
    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await axios.get(getUrl)
        console.log(res.data)
        const data = await res.data
        setFilterData(data)
    }

    useEffect(() => {
        
    })

    return (
        <div className="search">
            <Title />
            <div className="searchInputs">
                <div className="searchIcon"><SearchIcon /></div>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name="query"
                    placeholder={placeholder}
                    value={enteredData}
                    onChange={handleFilter}
                    />
                </form>
                {
                filterData.length === 0 ? '' 
                : 
                <div className="closeIcon">
                    <CloseIcon className='closeIcon' onClick={handleClose}/>
                </div>
                }
                <button onClick={handleSubmit}>test</button>
            </div>
            {/* make 3 or more letters until anything appears */}
            {filterData.length !== 0 && (
            <div className="dataResult">
                {filterData.slice(0, 10).map((value, key) => {
                    return (
                        <div>
                            <a className='dataItem' href={value.urls.small} rel="noopener noreferrer">
                                {/* gets search bar data */}
                                <p>{value.user.name}</p> 
                            </a>
                            {/* this data needs to be rendered 
                            only when search bar content is selected
                            from selected data */}

                            {/* if a value is selected render those images */}
                            {filterData.length > 0 && (
                                <Images filterData={filterData} />
                            )}
                            {/* <Results>{ results }</Results> */}
                        </div>
                    )
                })}
            </div>
            )}
            <Trending />
        </div>
    )
}

export default Search

