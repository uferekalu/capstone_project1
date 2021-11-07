import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import logo from "./images/side-huzzle-img.png";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Footer from "./components/Footer/Footer";

function App() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <Header />
      <div className="body">
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
          <SearchIcon className="searchIcon" />
          <input value={input} name="input" onChange={handleInputChange} />
          <MicIcon />
        </div>
        <div className="buttons">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
        <p className="language">
          Google offered in : <span className="blueText">Hausa </span>
          <span className="blueText">Igbo</span>
          <span className="blueText"> Èdè Yorùbá</span>
          <span className="blueText"> Nigerian Pidgin</span>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
