import React, { useState } from "react";
import "./App.css";

function App() {
  const [isEncodeVisible, setEncodeVisible] = useState(false);
  const [isDecodeVisible, setDecodeVisible] = useState(false);

  const encode = async () => {
    const original_str = document.getElementById("text-input").value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("encode", original_str);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://shrouded-crag-69475.herokuapp.com/encode";
    let result = await fetch(proxyurl + url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
    console.log(result);
    setEncodeVisible(true);
    document.getElementById("encodeResult").innerText = result;
  };

  const decode = async () => {
    const original_str = document.getElementById("text-input").value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("decode", original_str);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://shrouded-crag-69475.herokuapp.com/decode";
    let result = await fetch(proxyurl + url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
    console.log(result);
    setDecodeVisible(true);
    document.getElementById("decodeResult").innerText = result;
  };
  function goBack() {
    setEncodeVisible(false);
    setDecodeVisible(false);
  }
  return (
    <div className="App">
      {isEncodeVisible || isDecodeVisible ? (
        isEncodeVisible ? (
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              Result: <code id="encodeResult"></code>
            </p>
            <a className="App-link" onClick={goBack}>
              Go Back
            </a>
          </header>
        ) : (
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              Result: <code id="decodeResult">Decode Test</code>
            </p>
            <a className="App-link" onClick={goBack}>
              Go Back
            </a>
          </header>
        )
      ) : (
        <header className="App-header">
          <img src="img.png" className="App-logo" alt="logo" />
          <h1>String Shortner</h1>
          <input className="text-input" type="text" id="text-input" placeholder="Enter the String here.."/>
          <div className="submit-div">
            <a className="App-link" rel="noopener noreferrer" onClick={encode}>
              Encode String
            </a>
            <a className="App-link" onClick={decode} rel="noopener noreferrer">
              Decode String
            </a>
          </div>
        </header>
      )}
    </div>
  );
}

export default App;