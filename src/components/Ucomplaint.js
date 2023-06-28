import React from 'react'

export default function Ucomplaint() {
  return (
    <div>
        <form  action="">
            <p><label for="complaint"><h1>Register your complaint</h1></label></p>
            <textarea id="complaint" name="complaint" rows="25" cols="100"></textarea>
            <br></br>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}
