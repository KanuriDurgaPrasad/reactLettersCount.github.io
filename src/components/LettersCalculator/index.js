import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {
    inputText: '',
    count: 0,
  }

  onTypeInput = event => {
    const {inputText} = this.state
    this.setState({inputText: event.target.value})

    this.setState({count: inputText.length})
  }

  render() {
    const {inputText, count} = this.state

    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="search" className="description">
            Enter the phrase
          </label>
          <input
            id="search"
            type="text"
            className="input-text"
            placeholder="Enter the phrase"
            value={inputText}
            onChange={this.onTypeInput}
          />
          <p className="length-details">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LetterCalculator
