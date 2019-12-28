import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import ArtistCard from './ArtistCard'
import ArtistActionCreators from '../ArtistActionCreators'

import ArtistStore from '../ArtistStore'

// Private function that gets values from store
function getStateFromStore() {
  return {
    artistList: ArtistStore.getArtistList()
  }
}

export default class ArtistCardList extends Component {
  constructor(props) {
    super(props)

    // Set view's state based on store data
    this.state = getStateFromStore()
    this.onChange = this.onChange.bind(this)
  }

  // Subscribe to store events on mount
  componentDidMount() {
    ArtistActionCreators.getArtistList('')
    ArtistStore.addChangeListener(this.onChange)
  }

  // Un-Subscribe to store events on un-mount
  componentWillUnmount() {
    ArtistStore.removeChangeListener(this.onChange)
  }

  // Store uses this as callback fn when store is updated
  onChange() {
    this.setState(getStateFromStore())
  }

  render() {
    const { artistList } = this.state

    if (artistList) {
      return (
        <div style={useStyles.root}>
          <GridList style={useStyles.gridList}>
            {/* {console.log(this.state.artistList)} */}
            {artistList.map(tile => (
              // TODO: Add map key
              <GridListTile style={useStyles.gridListTile}>
                <ArtistCard
                  strArtist={tile.strArtist}
                  strArtistThumb={tile.strArtistThumb}
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
