import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className='ucla '>
        <div>
            <Link><button className='u s' type='button'>PROJECT APPLICATION</button></Link>
        </div>
        <div>
            <Link to='/login/user/complaint'><button className='u d' type='button'>COMPLAINT REGISTRATION</button></Link>
        </div>
        <div>
            <Link><button className='u w' type='button'>LABOUR BANK</button></Link>
        </div>
        <div>
            <Link><button className='u i' type='button'>PRODUCT DETAILS</button></Link>
        </div>
    </div>
  )
}
