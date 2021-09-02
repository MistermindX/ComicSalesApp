import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

function SignUp(props) {
  let testSeller
  const addNewSeller = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/sellers`, {
        name: e.target.sellerName.value
      })
      props.enterSite(res.data)
      testSeller = res.data
    } catch (err) {
      console.log(err)
    } finally {
      e.target.sellerName.value = ''
      if (testSeller) {
        props.history.push('/main')
      }
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
