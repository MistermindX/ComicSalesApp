import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

function ComicList(seller) {
  const [comicListsBySeller, setComicListsBySeller] = useState([])

  useEffect(() => {
    return () => {
      getAllUserComics()
    }
  }, [])

  const getAllUserComics = async (e) => {
    try {
      const res = await axios.get(`${BASE_URL}/comics/seller/${seller._id}`)
      console.log(res.data)
      setComicListsBySeller(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      console.log(comicListsBySeller)
    }
  }

  return (
    <ul>
      {comicListsBySeller.map((comic) => (
        <li key={comic._id}>
          <h3>{comic.title}</h3>
          <h5>{comic.grade}</h5>
          <h5>${comic.price}</h5>
        </li>
      ))}
    </ul>
  )
}

export default ComicList
