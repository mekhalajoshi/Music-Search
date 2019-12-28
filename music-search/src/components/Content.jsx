import React from 'react'
import ArtistCardList from './artist/views/ArtistCardList'
// import ArtistCardDetail from './artist/ArtistCardDetail'
import AlbumCardList from './album/AlbumCardList'
import './css/Content.css'

const Content = props => {
  const searchResults = props.searchText
    ? `Searching for ${props.searchText}`
    : null

  return (
    <div>
      {searchResults}
      <h3 className='List-Label'>Artists</h3>
      <ArtistCardList />
      <h3 className='List-Label'>Albums</h3>
      <AlbumCardList />
      {/* <ArtistCardDetail /> */}
    </div>
  )
}

export default Content
