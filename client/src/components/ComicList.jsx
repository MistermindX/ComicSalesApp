import React, { useEffect } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

function ComicList(seller) {
  const getAllUserComics = async (e) => {
    try {
      const res = await axios.get(`${BASE_URL}/comics/seller/${seller._id}`)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllUserComics()
  }, [])

  return <div>test</div>
}

export default ComicList
