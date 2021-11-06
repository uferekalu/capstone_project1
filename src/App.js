import { useState } from "react";
import "./App.css";
import logo from "./images/side-huzzle-img.png";
import Navbar from './components/Navbar';

function App() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value)
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content-holder">
        {input ? (
          input
        ) : (
          <img
            style={{ height: "100px", width: "400px" }}
            src={logo}
            alt="side huzzle logo"
          />
        )}
      </div>
      <div className="text-input">
        <input

          value={input}
          name="input"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
