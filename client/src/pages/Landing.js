import React from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

function Landing(props) {
  return (
    <div>
      <SignUp enterSite={props.enterSite} />
      <Login />
    </div>
  )
}

export default Landing
