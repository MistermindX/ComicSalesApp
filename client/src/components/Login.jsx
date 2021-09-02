import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

function Login(props) {
  const getSellerInformation = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(
        `${BASE_URL}/sellers/login/${e.target.sellerName.value}`
      )
      props.enterSite(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      e.target.sellerName.value = ''
    }
  }

  return (
    <div className="newSeller">
      <p>Login</p>
      <form onSubmit={getSellerInformation}>
        <input name="sellerName" placeholder="Enter Seller Name" />
        <button type="Submit">Login</button>
      </form>
    </div>
  )
}

export default Login
