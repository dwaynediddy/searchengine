import React from 'react'
import '../style/title.css'

const Header = "Unsplash"
const FirstLine = "The internet's source of"
const SecondLine = "Powered by creators everywhere."
const SpanText = " freely-usable images."

const Title = () => {
    return (
        <div className="title">
            <h1 className='header'>{Header}</h1>
            <div className='headerText'>
                <div className="headerTextOne">{FirstLine}<span>{SpanText}</span></div>
                <div className="headerTextTwo">{SecondLine}</div>
            </div>
        </div>
    )
}

export default Title
