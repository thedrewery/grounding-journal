import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';
import { bulkSave } from '../models/entriesModel';


const INITIAL_STATE = {
      value: "Take a deep breath in to begin...\n\n-Look around for 5 things that you can see, and say them out loud as you type them below... \n\n-Pay attention to your body and think of 4 things that you can feel. Say them out loud as you type them below... \n\n-Listen for 3 sounds you can hear, say them out loud as you type them below... \n\n-Say 2 things you can smell as you type them below... \n\n-Say 1 thing you can taste as you type it below. If you can't taste anything right now, describe your favorite thing to taste...",
      user: ''
    };

// Put AJAX in this Component
class Journal extends Component {

  constructor() {
    super();
    this.state = INITIAL_STATE;
  }
  
  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST'
    };
    fetch('http://localhost:3001', requestOptions)
        .then(response => response.json())
        .then(data => this.setState(this.state));
}

  // handleChangeUser(e) {
    
  //   this.setState({ user: e.target.value })
  //   console.log(state.user)
  // }
    

  //   setInput(prevInput => {
  //     return {
  //       ...prevInput,
  //       [user]: value
  //     }
  //   })
  // }

  handleClick(e) {
    const newEntry = {
      user: this.state.user,
      content: this.state.value
    }

    axios.post('http://localhost:3001', newEntry)

  }

  render() {
    return (
      <div style={{ width: 600 }}>
        <div>
          <span>Username:</span>
          <input
            onChange={(e) => this.setState({ user: e.target.value })}
            type='text'
            value={this.state.user}
          />
        <button id='submit' onClick={this.handleClick()}>Submit Entry</button>
      </div>
        <TextareaAutosize
          style="textAreaAutoSize"
          onChange={e => this.setState({ value: e.target.value })}
          minRows={10}
          maxRows={50}
          value={this.state.value}
          style={{ width: '100%' }}
        />
        </div>
     );
  }
}


const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

export default Journal;
