import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {

  const visible = {
    opacity: 1,
    pointerEvents: 'all',
    transform: 'translateY(0px) translateX(-50%)'
  }

  const hidden = {
    opacity: 0,
    pointerEvents: 'none',
    transform: 'translateY(80px) translateX(-50%)'
  }

  return (
    <Link to={props.link}>
        <div 
          style={ props.visible ? visible : hidden }
        className='button'>{props.text}</div>
    </Link>
  )
}

export default Button