import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

function ComicList(seller, newestBook) {
  const [comicListsBySeller, setComicListsBySeller] = useState([])

  const getAllUserComics = async (e) => {
    try {
      const res = await axios.get(`${BASE_URL}/comics/seller/${seller._id}`)
      setComicListsBySeller(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteComic = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.delete(`${BASE_URL}/comics/${e.target.value}`)
      console.log(res.data.value)
      setComicListsBySeller(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllUserComics()
  }, [newestBook])

  return (
    <ul>
      {comicListsBySeller.map((comic) => (
        <li className="comic" key={comic._id}>
          <button
            className="deleteButton"
            value={comic._id}
            onClick={deleteComic}
          >
            x
          </button>
          <h3>{comic.title}</h3>
          <h5>{comic.grade}</h5>
          <h5>${comic.price}</h5>
        </li>
      ))}
    </ul>
  )
}

export default ComicList
