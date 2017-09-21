import React, { Component } from 'react'

class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '#000000'}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="color" style={{ backgroundColor: `${this.state.value}` }} >
        <input type="color" value={this.state.value} onChange={this.handleChange} />
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}

export default Color
