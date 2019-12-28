
import { EventEmitter } from 'events'
import assign from 'object-assign'

import AlbumWebAPIUtils from './AlbumWebAPIUtils'
import AppDispatcher from '../../utils/AppDispatcher'
import ActionTypes from '../../utils/ActionTypes'


const CHANGE_EVENT = 'change'

// Store instances/variables
let albums = []
let details = []
let isLoading = false

const AlbumStore = assign({}, EventEmitter.prototype, {
  // Public functions the views can see

  emitChange() {
    this.emit(CHANGE_EVENT)
  },


  // View can subscribe to store events
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  // View can un-subscribe to store events
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  // View can retrieve specific values that store manages
  getAlbumList() {
    return albums
  },

  getAlbumDetails() {
    return details
  },
  setIsLoading (val){
    isLoading = val
  },
  getIsLoading() {
    return isLoading
  },

})

AlbumStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
  case ActionTypes.GET_ALBUM_LIST:
    // console.log(`Store invoked ${action}`)
    // Take action - Make API call and update state
    AlbumWebAPIUtils.getAlbumLists(action.searchText)
    AlbumStore.setIsLoading (true)
    AlbumStore.emitChange()
    break
  case ActionTypes.ALBUM_LIST_SUCCESS:
    albums = action.data // update store instance
    AlbumStore.setIsLoading (false)
    AlbumStore.emitChange()
    break
  case ActionTypes.ALBUM_LIST_FAILURE:
    albums = action.error // update store instance
    AlbumStore.setIsLoading (false)
    AlbumStore.emitChange()
    break
  case ActionTypes.GET_ALBUM_DETAILS:
    // Take action - Make API call and update state
    AlbumWebAPIUtils.getAlbumDetails(action.searchText)
    AlbumStore.setIsLoading (true)
    AlbumStore.emitChange()
    break
  case ActionTypes.ALBUM_DETAILS_SUCCESS:
    details = action.data // update store instance
    AlbumStore.setIsLoading (false)
    AlbumStore.emitChange()
    break
  case ActionTypes.ALBUM_DETAILS_FAILURE:
    details = action.error // update store instance
    AlbumStore.setIsLoading (false)
    AlbumStore.emitChange()
    break
  default:
    // do nothing
  }
})

export default AlbumStore
