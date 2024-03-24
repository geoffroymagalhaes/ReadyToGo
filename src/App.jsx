import { useState } from "react";

import "./App.css";
import rocket from "./assets/rocket.svg";
import text from "./assets/text.svg";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <img src={rocket} alt="" />
        <img src={text} alt="" />
      </header>
      <div className="allbutton">
        <div className="onoffbutton">
          <div className="array">
            <div
              className={switch1 === true ? "on" : "off"}
              onClick={() => {
                setSwitch1(true);
              }}
            >
              On
            </div>
            <div
              className={switch1 === true ? "off" : "on"}
              onClick={() => {
                setSwitch1(false);
              }}
            >
              Off
            </div>
          </div>

          <div className="array">
            <div
              className={switch2 === true ? "on" : "off"}
              onClick={() => {
                setSwitch2(true);
              }}
            >
              On
            </div>
            <div
              className={switch2 === true ? "off" : "on"}
              onClick={() => {
                setSwitch2(false);
              }}
            >
              Off
            </div>
          </div>
          <div className="array">
            <div
              className={switch3 === true ? "on" : "off"}
              onClick={() => {
                setSwitch3(true);
              }}
            >
              On
            </div>
            <div
              className={switch3 === true ? "off" : "on"}
              onClick={() => {
                setSwitch3(false);
              }}
            >
              Off
            </div>
          </div>
        </div>
        <div>
          {switch1 && switch2 && switch3 ? (
            <div className="go">GO !</div>
          ) : (
            <div className="noWay"> No Way !</div>
          )}
        </div>
      </div>
      <div className="resetB">
        <p
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
        >
          Reset
        </p>
      </div>
      <footer>
        <div>
          <span>Made with</span>
          <a target="blank" href="https://fr.reactjs.org/">
            React
          </a>
          <span>at </span>
          <a target="blank" href="https://www.lereacteur.io/">
            Le Reacteur
          </a>
          <span> by </span>
          <a
            target="blank"
            href="https://www.linkedin.com/in/geoffroy-magalhaes-3345872b5/"
          >
            Geo
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
