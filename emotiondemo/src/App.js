// import logo from './logo.svg';
// import { useState } from "react";
import "./App.css";
import PerformanceDemo from "./components/Performance/PerformanceDemo";
import Agnostic from "./components/FrameWorkAgnostic/Agnostic";
import StyledButtonComponent from "./components/StyledEmotion/Styled";
import PassingProps from "./components/PassingProps/PassingProps";

// npm i @emotion/styled @emotion/react @emotion/css

function App() {
  return (
    <div className="App">
      {/* <Agnostic/>
      <StyledButtonComponent>Touch This Button</StyledButtonComponent>
      <PassingProps/> */}
      <PerformanceDemo/>
    </div>
  );
}

export default App;
