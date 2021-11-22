import React from 'react'

const SingleImage = ({ image }) => {
    return (
        <div className="img">
            <img src={image.urls.small} alt="Unsplash" />
        </div>
    )
}

export default SingleImage
