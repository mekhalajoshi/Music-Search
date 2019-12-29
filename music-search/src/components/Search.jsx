import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'


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
      onInputChange(searchText)
    }
  }

  ;

  render() {
    const { searchText } = this.state
    const { onInputChange } = this.props

    return (
      <div className="artist-card__margin">
        <div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Artists or Tracks..."
              aria-label="Search Artists or Tracks..."
              aria-describedby="basic-addon2"
              onChange={e => {
                this.onChange(e)
              }}
              onKeyPress={e => {
                this.onKeyPressEnter(e)
              }}
            />

            {/* <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Filter"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item
                onClick={() => {
                  console.log('All selected')
                }}
                active
              >
                All
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log('Artists selected')
                }}
              >
                Artists
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log('Albums selected')
                }}
              >
                Albums
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log('Tracks selected')
                }}
              >
                Tracks
              </Dropdown.Item>
            </DropdownButton> */}

            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  onInputChange(searchText)
                }}
              >
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    )
  }
}

export default Search
