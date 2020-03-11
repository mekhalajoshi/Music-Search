import React from 'react'
import ArtistCardList from './artist/views/ArtistCardList'
import { Typography } from '@material-ui/core'
import AlbumCardList from './album/AlbumCardList'
import Tracks from './tracks/views/Tracks'
import './css/Content.css'

const Content = props => {
  const searchResults = props.searchText
    ? `Searching for ${props.searchText}`
    : null


  return (
    <div>
      <div className='list_container'>
        <Typography variant='h5' color='textPrimary' >
          {searchResults}
        </Typography>
      </div>
      <h3 className='List-Label'>Artists</h3>
      <ArtistCardList />
      <h3 className='List-Label'>Albums</h3>
      <AlbumCardList />
      <h3 className='List-Label'>Tracks</h3>
      <Tracks />
    </div>
  )
}

export default Content
