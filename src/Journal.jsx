import React, { Component } from 'react';



// Put AJAX in this Component
class Journal extends Component {

  constructor() {
    super();
    this.state = {
      value: "Take a deep breath in to begin...\n\n-Look around for 5 things that you can see, and say them out loud as you type below... \n\n-Pay attention to your body and think of 4 things that you can feel. Say them out loud as you type below... \n\n-Listen for 3 sounds you can hear, say them out loud as you type below... \n\n-Say 2 things you can smell as you type them below... \n\n-Say 1 thing you can taste as you type it below. If you can't taste anything right now, describe your favorite thing to taste...",
      user: ''
    };
  }
  // componentDidMount() {
  //   fetch(this.props.feedUrl)
  //     .then(response => {
  //       if (!response) {
  //         throw new Error('Network response was not OK.');
  //       }
  //       return response.json();
  //     })
  //     .then(data => { console.log('data', data); this.setState({ urls: data }); });
  
  // }

  render() {
    return (
      <div>
        <textarea rows={30} cols={75} onChange={this.state}>
          {this.state.value}
        </textarea>
        <div>
          Username: <input></input>
          <button id='submit'>Submit Entry</button>
          </div>
        </div>
     );
  }
}



//     const urlArr = [];
//     for (let i = 0; i < this.state.urls.length; i++) {
//       urlArr.push(
//         <FeedItem key={`${i}`} url={this.state.urls[i]} />
//       );
//     }
//     return (
//       <div ID='feed' style={styles.container}>
//         {urlArr}
//       </div>
//     );
//   }
// }

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

// class App extends Component {
//   render() {
//     return (
//       <div>
//       <h1 style={{color: "red"}}>Grounding Journal</h1>
//       <p>Add a little style!</p>
//       </div>
//     );
//   }
// }

// class textInput extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: "",
//       password: "",

// render() {
//      return (
//         <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//          />
//      );
//   }
// }
// export default App