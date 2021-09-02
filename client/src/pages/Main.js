import React from 'react'
import AddComic from '../components/AddComic'
import ComicList from '../components/ComicList'

function Main(seller) {
  return (
    <div>
      <AddComic {...seller} />
      <ComicList {...seller} />
    </div>
  )
}

export default Main
