import React from 'react'
import homeimg from '../images/38485.jpg'

export default function Home() {
  return (
    <div>
      <section>
        <div className="row">
            <div className="home-img p-5">
                <img src={homeimg} className="" alt="..." height="800" width="900"/>
            </div>
            <div className="not"></div>
            <div className="cards">
                <h1 className="text-center p-3">𝔼ℕ𝕋𝔼 𝔾ℝ𝔸𝕄𝔸𝕄</h1><br></br>
                <div className="card text-white bg-success text-center ml-5 mb-3 p-1">
                    <div className="card-header">PROJECT APPLICATION</div>
                    <div className="card-body">
                      <h5 className="card-title">Be a Catalyst for Change</h5>
                      <p className="card-text">Discover a diverse range of projects aimed at transforming our village into a thriving community.</p>
                    </div>
                    </div>
                    <div className="card text-white bg-danger text-center ml-5 mb-3 P-1">
                    <div className="card-header">COMPLAINT REGISTRATION</div>
                    <div className="card-body">
                      <h5 className="card-title">Your Voice Matters</h5>
                      <p className="card-text">Our user-friendly complaint registration system allows you to report any issues or suggestions you may have regarding our village. </p>
                    </div>
                    </div>
                    <div className="card text-white bg-warning text-center ml-5 mb-3 P-1">
                      <div className="card-header">LABOUR BANK</div>
                      <div className="card-body">
                        <h5 className="card-title">Connecting Skills and Opportunities</h5>
                        <p className="card-text">Find a pool of talented individuals, professionals, and contractors within our village who are ready to contribute their skills</p>
                      </div>
                    </div>
                    <div className="card text-white bg-info text-center ml-5 mb-3 P-1">
                      <div className="card-header">PRODUCT DETAILS</div>
                      <div className="card-body">
                        <h5 className="card-title">Promoting Local Entrepreneurship and Agriculture</h5>
                        <p className="card-text">We are proud to showcase the products and services of our Kudumbashree units and local farmers</p>
                      </div> 
            </div>
        </div>
        </div>
    </section>
    </div>
  )
}

