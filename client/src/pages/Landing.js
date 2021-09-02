import React from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

function Landing(props) {
  // console.log(props)
  return (
    <div>
      <SignUp {...props} enterSite={props.setSeller} />
      <Login {...props} enterSite={props.setSeller} />
    </div>
  )
}

export default Landing
