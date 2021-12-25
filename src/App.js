import "./App.css";
import logo from "./amazon.jpg";
import watch from "./watch.png";
import pink from "./pink.png";
import blue from "./blue.png";
import red from "./red.png";
import React, { useState } from "react";

function App() {
  const [watchColor, setWatchColor] = useState(watch);

  const [time, setTime] = useState("12:00");

  const mouseOut = () =>{
    setWatchColor(watch);
  }


  const [hr, setHr] = useState(45);
  const timefun = () => {
    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const time = `${hour}:${min}`;
    setTime(time);
  };

  const heart = () => {
    setHr(hr + 1);
  };

  const handleClick = () => {
    window.location.assign(
      "https://www.amazon.in/Fossil-Touchscreen-Smartwatch-Smartphone-Notifications/dp/B07SRVV8V4/ref=sr_1_1?qid=1640251874&refinements=p_n_feature_seven_browse-bin%3A1480901031%2Cp_n_feature_fourteen_browse-bin%3A11142592031%2Cp_36%3A3439821031&rnid=3439816031&s=watches&sr=1-1"
    );
  };
  return (
    <div>
      <nav className="nav-bar">
        <img src={logo} alt="amazon url" />
      </nav>
      <div className="grid-container">
        <div className="watch">
          <img src={watchColor} alt="Digital-Watch" />
          <p className="time">{time}</p>
          <p className="hrate">HR : {hr}</p>
        </div>
        <div clasName="desc">
          <h1 style={{ marginBottom: "30px", marginTop: "30px" }}>
            FitBit 19 - The Smartest Watch
          </h1>
          <p style={{ marginBottom: "30px", fontSize: "17px" }}>
            Dial Color: Black , Dial Material: Plastic, Strap Material:
            Silicone; Strap Width: 5 centimeters
          </p>
          <h2 style={{ marginBottom: "30px" }}>Watch Color</h2>
          <div className="watch-color">
            <img
              className="grid-item"
              onMouseOver={() => setWatchColor(watch)}
              onMouseOut={mouseOut}
              src={watch}
            ></img>
            <img
              className="grid-item"
              onMouseOver={() => setWatchColor(pink)}
              onMouseOut={mouseOut}
              src={pink}
            ></img>
            <img
              className="grid-item"
              onMouseOver={() => setWatchColor(blue)}
              onMouseOut={mouseOut}
              src={blue}
            ></img>
            <img
              className="grid-item"
              onMouseOver={() => setWatchColor(red)}
              onMouseOut={mouseOut}
              src={red}
            ></img>
          </div>
          <h2 style={{ marginBottom: "15px", marginTop: "30px" }}>Feature</h2>
          <button className="btn" onClick={timefun}>
            Time
          </button>
          <button className="btn" onClick={heart}>
            Heart Rate
          </button>
          <button className="buynow" onClick={handleClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
