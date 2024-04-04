import React from 'react'
import logo from '../logo.svg';

function ImageHeader() {
  return (
    <div>
      <img src={logo} className='w-28 h-28 object-contain mb-8'></img>
    </div>
  )
}

export default ImageHeader
