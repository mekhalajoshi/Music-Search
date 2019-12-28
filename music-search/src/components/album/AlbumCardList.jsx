import React, { Component } from 'react'
// import { GridList, GridListTile } from '@material-ui/core'
import AlbumActionCreators from './AlbumActionCreators'
// import AlbumCard from './AlbumCard'
import AlbumListLoading from './AlbumListLoading'
import AlbumList from './AlbumList'
import AlbumStore from './AlbumStore'

// Private function that gets values from store
function getStateFromAlbumStore() {
  // console.log('AlbumCardList ' + this.state.albumList)
  return {
    albumList: AlbumStore.getAlbumList(),
    isLoading: AlbumStore.getIsLoading()
  }
}

export default class AlbumCardList extends Component {
  constructor(props) {
    super(props)

    // Set view's state based on store data
    this.state = getStateFromAlbumStore()
    this.onAlbumChange = this.onAlbumChange.bind(this)
  }

  // Subscribe to store events on mount
  componentDidMount() {
    AlbumActionCreators.getAlbumList('')
    AlbumStore.addChangeListener(this.onAlbumChange)
  }

  // Un-Subscribe to store events on un-mount
  componentWillUnmount() {
    AlbumStore.removeChangeListener(this.onAlbumChange)
  }

  // Store uses this as callback fn when store is updated
  onAlbumChange() {
    this.setState(getStateFromAlbumStore())
  }

  render() {
    const { albumList } = this.state
    const { isLoading } = this.state

    return (
      <div>
        {isLoading
          ? <AlbumListLoading />
          : <AlbumList albumList={albumList} />
        }
      </div>
    )
  }
}
