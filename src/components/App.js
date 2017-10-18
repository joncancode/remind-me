import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

addReminder() {
    console.log('state', this.state)
}

  render() {
    return (
      <div className="App">
        <div className="title">Remind Me...</div>
        <div className="form-inline">
          <div className="form-group">
            <input 
            className="form-control" 
            placeholder="I have to..."
            onChange={e => this.setState({text: e.target.value})}
             />
          </div>
          <button type="button" 
          className="btn btn-success"
          onClick={() => this.addReminder()}>
            Add to Remind
          </button>
        </div>
      </div>
    );
  }
}

export default App;
