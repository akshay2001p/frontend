import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className='ucla'>
        <div>
            <Link><button className='u s' type='button'>ADD PROJECTS</button></Link>
        </div>
        <div>
            <Link><button className='u d' type='button'>ADD LABOURS</button></Link>
        </div>
        <div>
            <Link><button className='u w' type='button'>VIEW COMPLANITS</button></Link>
        </div>

    </div>
  )
}
