import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

function Login(props) {
  let sellerExists
  const getSellerInformation = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(
        `${BASE_URL}/sellers/login/${e.target.sellerName.value}`
      )
      props.setSeller(res.data)
      sellerExists = res.data
    } catch (err) {
      console.log(err)
    } finally {
      e.target.sellerName.value = ''
      sellerExists
        ? props.history.push('/main')
        : (e.target.sellerName.placeholder = 'Invalid Login')
    }
  }

  return (
    <div className="seller">
      <h2>Login</h2>
      <form onSubmit={getSellerInformation}>
        <input name="sellerName" placeholder="Enter Seller Name" />
        <button type="Submit">Login</button>
      </form>
    </div>
  )
}

export default Login
