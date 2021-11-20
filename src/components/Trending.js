import React from 'react'
import '../style/trending.css'

const TrendingText = ' popular images trending'

const Trending = () => {
    return (
        <div className='trending'>
            <span>Trending:  </span>
            {TrendingText}
        </div>
    )
}

export default Trending
