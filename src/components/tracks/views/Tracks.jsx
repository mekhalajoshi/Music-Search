import React, { Component } from 'react'
// import { GridList, GridListTile } from '@material-ui/core'
import TrackActionCreator from '../TrackActionCreator'
// import TrackCard from './TrackCard'
import TracksLoading from '../views/TracksLoading'
import TrackList from './TrackList'
import TrackStore from '../TrackStore'

// Private function that gets values from store
function getStateFromTrackStore() {
  // console.log('TrackCardList ' + this.state.trackList)
  return {
    tracks: TrackStore.getTrackList(),
    isLoading: TrackStore.getIsLoading()
  }
}

export default class Tracks extends Component {
  constructor(props) {
    super(props)

    // Set view's state based on store data
    this.state = getStateFromTrackStore()
    this.onTrackChange = this.onTrackChange.bind(this)
  }

  // Subscribe to store events on mount
  componentDidMount() {
    TrackActionCreator.getTrackList('')
    TrackStore.addChangeListener(this.onTrackChange)
  }

  // Un-Subscribe to store events on un-mount
  componentWillUnmount() {
    TrackStore.removeChangeListener(this.onTrackChange)
  }

  // Store uses this as callback fn when store is updated
  onTrackChange() {
    this.setState(getStateFromTrackStore())
  }

  render() {
    const { tracks } = this.state
    const { isLoading } = this.state

    return (
      <div>
        {isLoading
          ? <TracksLoading />
          : <TrackList trackList={tracks} />
        }
      </div>
    )
  }
}
