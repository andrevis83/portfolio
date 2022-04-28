import React from 'react'
import PropTypes from 'prop-types'
import Light from './Light'

const Lights = props => {
  return (
    <div className="absolute inset-2 bg-transparent blur-lg"> 
        <Light className='absolute w-7/12 aspect-square rounded-full top-20 left-4 bg-indigo-300' />
        <Light className='absolute w-4/12 aspect-square rounded-full bottom-24 right-4 bg-indigo-600' />
    </div>
  )
}

Lights.propTypes = {}

export default Lights