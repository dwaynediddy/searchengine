import React, { useState } from 'react'

import '../style/search.css'
import Title from '../components/Title'

import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close';


const Search = ({ placeholder, data }) => {
    const [filterData, setFilterData] = useState([])
    
    const handleFilter = (e) => {
        const searchInput = e.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchInput.toLowerCase())
        })
        if(searchInput === '') {
            setFilterData([])
        } else {
            setFilterData(newFilter) 
        }
    }

    return (
        <div className="search">
            <Title />
            <div className="searchInputs">
                <div className="searchIcon"><SearchIcon /></div>
                <input 
                type="text"
                placeholder={placeholder}
                onChange={handleFilter}
                />
                <div className="closeIcon"><CloseIcon /></div>
            </div>
            {/* make 3 or more letters until anything appears */}
            {filterData.length !== 0 && (
            <div className="dataResult">
                {filterData.slice(0, 10).map((value, key) => {
                    return (
                        <a className='dataItem' href={value.link} target='_blank' rel="noopener noreferrer">
                            <p>{value.title}</p> 
                        </a>
                    )
                })}
            </div>
            )}

        </div>
    )
}

export default Search

