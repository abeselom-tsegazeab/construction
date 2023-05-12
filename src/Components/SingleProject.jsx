import React from 'react'
import { useParams } from 'react-router-dom'
const SingleProject = () => {
    const {name}= useParams()
  return (
    <div>
        <img src="images/about-1.jpg" alt="singleproject" />
    </div>
  )
}

export default SingleProject