import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Journal from './Journal.jsx';
import style from './style.css'


//App consists of one feed
class App extends Component {
  render() {
      return (
          <div style={styles.container}>
        <Journal/>
      </div>
    );
  }
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('app'));
