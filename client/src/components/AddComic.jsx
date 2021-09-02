import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

function AddComic({ seller, setNewestBook }) {
  const addNewComic = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/comics`, {
        title: e.target.comicTitle.value,
        grade: e.target.comicGrade.value,
        img: e.target.comicImage.value,
        price: e.target.comicPrice.value,
        seller_id: seller._id
      })
      setNewestBook(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      e.target.comicTitle.value = ''
      e.target.comicGrade.value = ''
      e.target.comicImage.value = ''
      e.target.comicPrice.value = ''
    }
  }

  return (
    <div className="addComic">
      <h2>Add New Comic</h2>
      <form onSubmit={addNewComic}>
        <input name="comicTitle" placeholder="Title" />
        <input name="comicGrade" placeholder="Grade" />
        <input name="comicImage" placeholder="Image Link" />
        <input name="comicPrice" placeholder="Price" />
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}
export default AddComic
