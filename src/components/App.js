import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id)
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
    <ul className="list-group col-sm-4"> 
    {
        reminders.map(reminder => {
            return (
                <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div className="list-item delete-button"
                onClick={() => this.deleteReminder(reminder.id)}
                >
                    &#x2715;
                </div>
                    
                    </li>
            )
        })
    }
    </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">Remind Me...</div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
        
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            ADD
          </button>

        </div>
        {this.renderReminders()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  };
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
