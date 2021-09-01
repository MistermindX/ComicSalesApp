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
      console.log(res.data)
      props.enterSite(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      e.target.sellerName.value = ''
    }
  }

  return (
    <div className="newSeller">
      <p>Create New Seller Account</p>
      <form onSubmit={addNewSeller}>
        <input name="sellerName" placeholder="Enter Seller Name" />
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
