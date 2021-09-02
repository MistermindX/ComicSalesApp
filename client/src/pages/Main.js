import React, { useState } from 'react'
import AddComic from '../components/AddComic'
import ComicList from '../components/ComicList'

function Main(seller) {
  const [newestBook, setNewestBook] = useState({})

  return (
    <div>
      <AddComic seller={seller} setNewestBook={setNewestBook} />
      <ComicList seller={seller} newestBook={newestBook} />
    </div>
  )
}

export default Main
