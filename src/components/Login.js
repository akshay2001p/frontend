import React from 'react'

export default function Login() {
  return (
    <div>
        <div className="row  p-5">
        <div className="log1"></div>
        <div className="log2">
          <h4>𝔸𝕝𝕣𝕖𝕒𝕕𝕪 𝕙𝕒𝕧𝕖 𝕒𝕟 𝕒𝕔𝕔𝕠𝕦𝕟𝕥</h4>
          <form action="/login" method='POST'>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" name="password" id="exampleInputPassword1" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="log1"></div>
      </div>
    </div>
  )
}
