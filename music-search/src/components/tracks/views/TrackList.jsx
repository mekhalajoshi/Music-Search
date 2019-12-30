import React from 'react'
import { GridList, GridListTile, Typography } from '@material-ui/core'
import TrackCard from './TrackCard'
import '../css/TrackList.css'

function TrackList(props) {
  const { trackList } = props
  if (trackList) {
    return (
      <div className='list_container'>
        <GridList style={useStyles.gridList}>
          {trackList.map(tile => (
            // TODO: Add map key
            <GridListTile
              style={useStyles.gridListTile}
              key={tile.idTrack}
            >
              <TrackCard
                strTrack={tile.strTrack}
                strTrackThumb={tile.strTrackThumb}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  } else {
    // TODO: Error handling
    return (
      <div className='list_container'>
        <Typography variant='h5' color='textPrimary' >
          No Results found
      </Typography>
      </div>
    )
  }
}



const useStyles = {
  root: {

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

export default TrackList

