import React, { useState } from 'react'
import AddComic from '../components/AddComic'
import ComicList from '../components/ComicList'

function Main(seller, props, setSeller) {
  const [newestBook, setNewestBook] = useState({})

  return (
    <div>
      <AddComic
        props={props}
        seller={seller}
        setNewestBook={setNewestBook}
        setSeller={setSeller}
      />
      <ComicList seller={seller} newestBook={newestBook} />
    </div>
  )
}

export default Main
