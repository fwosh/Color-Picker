import React, { Component } from 'react'
import './App.css'
import Color from './Color'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { colorList: [<Color />] }

    this.onAddButtonClick = this.onAddButtonClick.bind(this)
  }

  onAddButtonClick(event) {
    const oldList = this.state.colorList
    this.setState({
      colorList: oldList.concat(<Color />)
    })
  }

  render() {
    return (
      <div className="App">
        <input className="add" type="button" value="+" onClick={this.onAddButtonClick} />
        <div className="container">
          {this.state.colorList.map(function(input) {
            return input
          })}
        </div>
      </div>
    )
  }
}

export default App
