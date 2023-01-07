import React from "react";
import Main from "./components/Main";
import './styles/App.css'

function App(){
  return (
    <React.Fragment>
      <div className="title">Remember the Puppy?</div>
      <div className="info">Click the puppies that you haven't clicked before!</div>
      <Main />
    </React.Fragment>
  );
}

export default App;
