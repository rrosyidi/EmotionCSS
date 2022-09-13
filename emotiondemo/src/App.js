// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { ButtonStyled } from "./components/EmotionButtonStyled";
import ButtonCss from "./components/EmotionButtonCss";
import RegularButton from "./components/RegularButton";
import InlineButton from "./components/InlineButton";

function App() {
  const [Setting, setSetting] = useState("none");
  const thousand = Array(1000).fill(1);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <button id="none" onClick={() => setSetting("none")}>
          None
        </button>
        <button id="emotionStyle" onClick={() => setSetting("emotionStyle")}>
          EmotionStyle
        </button>
        <button id="emotionCss" onClick={() => setSetting("emotionCss")}>
          EmotionCss
        </button>
        <button id="external" onClick={() => setSetting("external")}>
          ExternalCss
        </button>
        <button id="inline" onClick={() => setSetting("inline")}>
          InlineCss
        </button>
      </div>

      {Setting === "emotionStyle"
        ? thousand.map((_, i) => <ButtonStyled key={i}></ButtonStyled>)
        : Setting === "emotionCss" ? thousand.map((_, i) => <ButtonCss key={i}></ButtonCss>)
        : Setting === "external" ? thousand.map((_, i) => <RegularButton key={i}></RegularButton>)
        : Setting === "inline" ? thousand.map((_, i) => <InlineButton key={i}></InlineButton>)
        : <div>Choose a Framework</div>
      }
    </div>
  );
}

export default App;
