import React, { Component } from 'react';
import './App.css';

import CaseConverter from './CaseConverter';

class App extends Component {
  
  render() {
    return (
      <div className="App d-flex flex-column vh-100"> 

        <div className="content">
          <CaseConverter></CaseConverter>
        </div>

        <footer className="footer mt-auto py-3">
          <div className="container">
            <span className="footer-text">&copy; 2019 | Created using React and reactstrap.</span>
          </div>
        </footer>
                  
      </div>
    );
  }
}

export default App;
