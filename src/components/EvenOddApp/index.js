// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state
    this.setState(prevState => ({count: Math.floor(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="even-odd-counter-container">
          <h1>Count {count}</h1>
          <p className="para">Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button className="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="note-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
