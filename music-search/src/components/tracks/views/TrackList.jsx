import React from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import TrackCard from './TrackCard'


function TrackList(props) {
  const { trackList } = props
  if (trackList) {
    return (
      <div style={useStyles.root}>
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

export default TrackList

