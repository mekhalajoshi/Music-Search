import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArtistActionCreators from '../ArtistActionCreators'

import ArtistStore from '../ArtistStore'

// Private function that gets values from store
function getStateFromStore() {
  return {
    artistDetails: ArtistStore.getArtistDetails()
  }
}

export default class ArtistCardDetail extends Component {
  constructor(props) {
    super(props)

    // Set view's state based on store data
    this.state = getStateFromStore()
    this.onChange = this.onChange.bind(this)
  }

  // Subscribe to store events on mount
  componentDidMount() {
    ArtistActionCreators.getArtistDetails('Sting')
    ArtistStore.addChangeListener(this.onChange)
  }

  // Un-Subscribe to store events on un-mount
  componentWillUnmount() {
    ArtistStore.removeChangeListener(this.onChange)
  }

  // Store uses this as callback fn when store is updated
  onChange() {
    this.setState(getStateFromStore())
  }

  render() {
    return (
      <div>
        {this.state.artistDetails}
				ArtistCardDetail
      </div>
    )
  }
}

ArtistCardDetail.propTypes = {
  idArtist: PropTypes.string,
  strArtist: PropTypes.string,
  strArtistThumb: PropTypes.string,
  intFormedYear: PropTypes.number,
  strStyle: PropTypes.string,
  strBiographyEN: PropTypes.string,
  strWebsite: PropTypes.string
}
