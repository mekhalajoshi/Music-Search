import $ from 'jquery'
import ArtistActionCreators from './ArtistActionCreators'

let request

const ArtistWebAPIUtils = {

  

  getArtistLists(searchText) {
     if(request) {
    request.abort()
  }
    if (searchText === '' || searchText === undefined) searchText = 'Coldplay'
    const uri = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='.concat(searchText)

    request = $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        // console.log(data.artists)
        ArtistActionCreators.successArtistList(data.artists)
        request = null;
      },

      error() {
        ArtistActionCreators.failureArtistList('FAILURE_SORRY')
        request = null;
      },
    })
  },

  getArtistDetails(searchText) {
    const uri = 'movies_list/'.concat(searchText === '' ? 'star' : searchText)

    $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        ArtistActionCreators.successArtistDetails('SUCCESS_DETAIL_DATA')
      },

      error() {
        ArtistActionCreators.failureArtistDetails('FAILURE_DETAIL_SORRY')
      },
    })
  },
}

export default ArtistWebAPIUtils
