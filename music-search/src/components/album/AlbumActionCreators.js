import AppDispatcher from '../../utils/AppDispatcher'
import ActionTypes from '../../utils/ActionTypes'

const AlbumActionCreators = {
  getAlbumList(searchText) {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_ALBUM_LIST,
      searchText, // Coldplay
    })
  },

  successAlbumList(data) {
    AppDispatcher.dispatch({
      type: ActionTypes.ALBUM_LIST_SUCCESS,
      data, // SUCCESS
    })
  },

  failureAlbumList(error) {
    AppDispatcher.dispatch({
      type: ActionTypes.ALBUM_LIST_FAILURE,
      error, // FAILURE
    })
  },

  getAlbumDetails(searchText) {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_ALBUM_DETAILS,
      searchText, // Sting
    })
  },
  successAlbumDetails(data) {
    AppDispatcher.dispatch({
      type: ActionTypes.ALBUM_DETAILS_SUCCESS,
      data, // SUCCESS
    })
  },

  failureAlbumDetails(error) {
    AppDispatcher.dispatch({
      type: ActionTypes.ALBUM_DETAILS_FAILURE,
      error, // FAILURE
    })
  },

}

export default AlbumActionCreators
