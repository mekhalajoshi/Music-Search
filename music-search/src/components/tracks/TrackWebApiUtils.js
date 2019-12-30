import $ from 'jquery'
import TrackActionCreator from './TrackActionCreator'

let request;

const TrackWebApiUtils = {
  getTrackLists(searchText) {

    if (request) {
      request.abort();
    }

    if (searchText === '' || searchText === undefined) searchText = 'Coldplay'
    const uri = 'https://theaudiodb.com/api/v1/json/1/track-top10.php?s='.concat(searchText)

    request = $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        TrackActionCreator.successTrackList(data.track)
        request = null;

      },

      error() {
        TrackActionCreator.failureTrackList('FAILURE_SORRY')
        request = null;
      
      },
    })
  },

  getTrackDetails(searchText) {
    const uri = 'movies_list/'.concat(searchText === '' ? 'star' : searchText)

    $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        TrackActionCreator.successTrackDetails('SUCCESS_DETAIL_DATA')
      },

      error() {
        TrackActionCreator.failureTrackDetails('FAILURE_DETAIL_SORRY')
      },
    })
  },
}

export default TrackWebApiUtils
