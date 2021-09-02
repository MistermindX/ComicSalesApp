import React from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

function Landing(props) {
  // console.log(props)
  return (
    <div>
      <SignUp {...props} enterSite={props.enterSite} />
      <Login {...props} enterSite={props.enterSite} />
    </div>
  )
}

export default Landing
