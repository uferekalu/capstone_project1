import { useState } from "react";
import "./App.css";
import logo from "./images/side-huzzle-img.png";
import reactlogo from "./images/favicon.ico";
import searchIcon from "./images/search.png";
import microphone from "./images/microphone.png";
import Navbar from "./components/Navbar";
import Sidedrawer from "./components/Sidedrawer";
import Backdrop from "./components/Backdrop";

function App() {
  const [input, setInput] = useState("");
  const [sideToggle, setSideToggle] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="container">
      <Navbar click={() => setSideToggle(true)} />
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div className="content-holder">
        {input ? input : <img src={logo} alt="side huzzle logo" />}
      </div>
      <div className="text-input-holder">
        <img className="search__icon" src={searchIcon} alt="search icon" />
        <img className="microphone" src={microphone} alt="microphone" />
        <input
          className="text-input"
          value={input}
          name="input"
          onChange={handleInputChange}
        />
      </div>
      <div className="search-div">
        <div className="search-div__button">Hustle Search</div>
        <div className="search-div__lucky">I'm feeling lucky</div>
      </div>
      <div className="sidehussle_container">
        <div className="sidehussle__info">Sidehussle offered in:</div>
        <div className="sidehussle__languages">
          <ul className="sidehussle__languages__list">
            <li className="sidehussle__languages__hausa">Hausa</li>
            <li className="sidehussle__languages__igbo">Igbo</li>
            <li className="sidehussle__languages__edoyoruba">Edo Yoruba</li>
            <li className="sidehussle__languages__nigpid">Nigerian Pidgin</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="footer__div">
          <img
            className="footer__div__img"
            src={reactlogo}
            alt="side huzzle logo"
          />
          <h1>ARYA</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
