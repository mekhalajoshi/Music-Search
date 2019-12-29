import $ from 'jquery'
import ArtistActionCreators from './ArtistActionCreators'

const ArtistWebAPIUtils = {
  getArtistLists(searchText) {
    if (searchText === '' || searchText === undefined) searchText = 'Coldplay'
    const uri = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='.concat(searchText)

    $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        // console.log(data.artists)
        ArtistActionCreators.successArtistList(data.artists)
      },

      error() {
        ArtistActionCreators.failureArtistList('FAILURE_SORRY')
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
