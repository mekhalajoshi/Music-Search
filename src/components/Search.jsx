import React, { Component } from 'react'
import { TextField, IconButton, } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'


class Search extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onKeyPressEnter = this.onKeyPressEnter.bind(this)
    this.state = {
      searchText: ''
    }
  }

  onChange(event) {
    this.setState({
      searchText: event.target.value
    })
  }



  onKeyPressEnter(event) {
    const { searchText } = this.state
    const { onInputChange } = this.props

    if (event.keyCode === 13 || event.which === 13) {
      event.preventDefault() // Ensure it is only this code that run
      this.setState({
        searchText: ''
      })
      onInputChange(searchText)
    }
  }


  render() {
    const { searchText } = this.state
    const { onInputChange } = this.props

    return (
      // <div className="artist-card__margin">

      <div style={useStyles.Paper}>

        <TextField
          value={searchText}
          onChange={e => {
            this.onChange(e)
          }}
          onKeyPress={e => {
            this.onKeyPressEnter(e)
          }}

          id="outlined-with-placeholder"
          label="Search Artists"
          placeholder="Eg. Coldplay"
          style={useStyles.textField}
          margin="normal"
          variant="outlined"
          fullWidth
        />

        <IconButton
          style={useStyles.icon}
          onClick={() => {
            this.setState({
              searchText: ''
            })
            onInputChange(searchText)
          }}>
          <SearchIcon />
        </IconButton>
      </div>

    )
  }
}

const useStyles = {
  Paper: {
    margin: '10px',
    paddingLeft: '10px',
    alignItems: 'center',
    display: 'flex',
  },
  icon: {
    outline: 'none',
  },
}

export default Search
