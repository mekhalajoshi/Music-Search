import AppDispatcher from '../../utils/AppDispatcher'
import ActionTypes from '../../utils/ActionTypes'

const TrackActionCreator = {
  getTrackList(searchText) {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_TRACK_LIST,
      searchText, // Coldplay
    })
  },

  successTrackList(data) {
    AppDispatcher.dispatch({
      type: ActionTypes.TRACK_LIST_SUCCESS,
      data, // SUCCESS
    })
  },

  failureTrackList(error) {
    AppDispatcher.dispatch({
      type: ActionTypes.TRACK_LIST_FAILURE,
      error, // FAILURE
    })
  },

  getTrackDetails(searchText) {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_TRACK_DETAILS,
      searchText, // Sting
    })
  },
  successTrackDetails(data) {
    AppDispatcher.dispatch({
      type: ActionTypes.TRACK_DETAILS_SUCCESS,
      data, // SUCCESS
    })
  },

  failureTrackDetails(error) {
    AppDispatcher.dispatch({
      type: ActionTypes.TRACK_DETAILS_FAILURE,
      error, // FAILURE
    })
  },

}

export default TrackActionCreator
