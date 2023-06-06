import React from 'react'
import "./404Error.css"
import errorImage from "../../images/error.gif"

const Error = () => {
  return (
    <div className='errorPage'>
        <img src={errorImage} alt='error' />
    </div>
  )
}

export default Error