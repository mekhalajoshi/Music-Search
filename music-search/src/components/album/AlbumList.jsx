import React from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import AlbumCard from './AlbumCard'


function AlbumList(props) {
  const { albumList } = props
  if (albumList) {
    return (
      <div style={useStyles.root}>
        <GridList style={useStyles.gridList}>
          {albumList.map(tile => (
            // TODO: Add map key
            <GridListTile
              style={useStyles.gridListTile}
              key={tile.idAlbum}
            >
              <AlbumCard
                strAlbum={tile.strAlbum}
                strAlbumThumb={tile.strAlbumThumb}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  } else {
    // TODO: Error handling
    return (
      <h1>Not Found</h1>
    )
  }
}



const useStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    marginTop: '20px',
    padding: '20px',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  gridListTile: {
    width: '160px'
  }
}

export default AlbumList

