import React from 'react';
import './App.css';

function Encode({encodeResult}) {
    return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
    Result: <code>{encodeResult}</code>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go Back
            </a>
          </header>
        </div>
      );
    }

export default Encode;