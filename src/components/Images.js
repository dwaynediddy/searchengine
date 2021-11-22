 import React from 'react'
import SingleImage from './SingleImage'

const Images = ({ filterData }) => {
    console.log(filterData)
    return filterData.map((image) => (
        <SingleImage key={image.id} image={image} />
        )  
    )
}

export default Images