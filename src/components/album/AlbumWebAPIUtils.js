import $ from 'jquery'
import AlbumActionCreators from './AlbumActionCreators'

let request;

const AlbumWebAPIUtils = {

   
  
  getAlbumLists(searchText) {

     if (request) {
      request.abort();
  }

    if (searchText === '' || searchText === undefined) searchText = 'Coldplay'
    const uri = 'https://theaudiodb.com/api/v1/json/1/searchalbum.php?s='.concat(searchText)

    request = $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        AlbumActionCreators.successAlbumList(data.album)
        request = null;
      },

      error() {
        AlbumActionCreators.failureAlbumList('FAILURE_SORRY')
        request = null;
      },
    })
  },

  getAlbumDetails(searchText) {
    const uri = 'movies_list/'.concat(searchText === '' ? 'star' : searchText)

    $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        AlbumActionCreators.successAlbumDetails('SUCCESS_DETAIL_DATA')
      },

      error() {
        AlbumActionCreators.failureAlbumDetails('FAILURE_DETAIL_SORRY')
      },
    })
  },
}

export default AlbumWebAPIUtils
