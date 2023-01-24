import React from 'react'
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div className='nav'>
        <div className='nav-title'>
            <img src={props.title} alt='Title'/>
        </div>

        <Link to={props.back}>
            <div className='back'>
                <img src={'/Titles/Back.svg'} alt='Back button'/>
            </div>
        </Link>
    </div>
  )
}

export default Nav