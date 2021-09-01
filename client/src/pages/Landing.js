import React from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

function Landing(props) {
  // console.log(props)
  return (
    <div>
      <SignUp enterSite={props.enterSite} />
      <Login enterSite={props.enterSite} />
    </div>
  )
}

export default Landing
