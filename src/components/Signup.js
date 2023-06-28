import React from 'react'

export default function Signup() {
  return (
    <div>
        <div className="row p-5">
        <div className="log1"></div>
        <div className="log2">
          <h4 >ℂ𝕣𝕖𝕒𝕥𝕖 𝕒𝕟 𝕒𝕔𝕔𝕠𝕦𝕟𝕥</h4>
          <form action='/signup' method='POST'>
            <div className="form-row ">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input type="text" className="form-control" name="name" id="inputName"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" className="form-control" name="password" id="inputPassword"/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Email</label>
              <input type="email" className="form-control" name="email" id="inputEmail"/>
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address</label>
              <input type="text" className="form-control"  name="address" id="inputAddress"/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputCity">Building Number</label>
                <input type="number" className="form-control" name="bno" id="inputBno"/>
              </div>
              <div className="form-group col-md-4">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" name="city" id="inputCity"/>
              </div>
              <div className="form-group col-md-4">
                <label for="inputZip">District</label>
                <input type="text" className="form-control" name="district" id="inputDis"/>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">SUBMIT</button>
          </form>
          
        </div>
        <div className="log1"></div>
      </div>
    </div>
  )
}
