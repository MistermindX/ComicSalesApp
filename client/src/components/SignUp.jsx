import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

function SignUp(props) {
  const addNewSeller = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/sellers`, {
        name: e.target.sellerName.value
      })
      props.setSeller(res.data)
      props.history.push('/main')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="seller">
      <h2>Create New Seller Account</h2>
      <form onSubmit={addNewSeller}>
        <input name="sellerName" placeholder="Enter Seller Name" />
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
