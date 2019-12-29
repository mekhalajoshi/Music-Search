
import { EventEmitter } from 'events'
import assign from 'object-assign'

import TrackWebApiUtils from './TrackWebApiUtils'
import AppDispatcher from '../../utils/AppDispatcher'
import ActionTypes from '../../utils/ActionTypes'


const CHANGE_EVENT = 'change'

let tracks = []
let details = []
let isLoading = false

const TrackStore = assign({}, EventEmitter.prototype, {
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
  getTrackList() {
    return tracks
  },

  getTrackDetails() {
    return details
  },
  setIsLoading (val){
    isLoading = val
  },
  getIsLoading() {
    return isLoading
  },


})

TrackStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
  case ActionTypes.GET_TRACK_LIST:
    // console.log(`Store invoked ${action}`)
    // Take action - Make API call and update state
    TrackStore.setIsLoading (true)
    TrackWebApiUtils.getTrackLists(action.searchText)
    TrackStore.emitChange()
    break
  case ActionTypes.TRACK_LIST_SUCCESS:
    tracks = action.data // update store instance
    TrackStore.setIsLoading (false)
    TrackStore.emitChange()
    break
  case ActionTypes.TRACK_LIST_FAILURE:
    TrackStore.setIsLoading (false)
    tracks = action.error // update store instance
    TrackStore.emitChange()
    break
  case ActionTypes.GET_TRACK_DETAILS:
    // Take action - Make API call and update state
    TrackStore.setIsLoading (true)
    TrackWebApiUtils.getTrackDetails(action.searchText)
    TrackStore.emitChange()
    break
  case ActionTypes.TRACK_DETAILS_SUCCESS:
    TrackStore.setIsLoading (false)
    details = action.data // update store instance
    TrackStore.emitChange()
    break
  case ActionTypes.TRACK_DETAILS_FAILURE:
    TrackStore.setIsLoading (false)
    details = action.error // update store instance
    TrackStore.emitChange()
    break
  default:
    // do nothing
  }
})

export default TrackStore
