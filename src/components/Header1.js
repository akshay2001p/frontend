import React from 'react';
import { Link } from 'react-router-dom';

export default function Header1() {
  return (
    <div>
        <header className="bg-primary">
        <div className="row text-white">
            <div className="col-md-6 col-9 p-3 pl-5">
                <h2>ENTE GRAMAM</h2>
            </div>
            <div className="col-md-6 col-3 my-auto">
                <nav className="navbar navbar-expand-lg navbar-light ">
                
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          {/* <a className="nav-link text-white" href="/">HOME <span className="sr-only">(current)</span></a> */}
                          <Link to='/'>LOGOUT</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
            </div>
        </div>
    </header>

    </div>
  )
}
