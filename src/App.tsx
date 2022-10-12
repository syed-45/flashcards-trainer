// import countries_capitals from "./data/countries&capitals.json"
import { Question } from "./Components/Question";
import { RevealAnswer } from "./Components/RevealAnswer";
import { useState } from "react";
import "./App.css";
//create a new type for screen
// export type Screen = "start" | "question" | "answer"; 

function App(): JSX.Element {
  const [screen, setScreen] = useState<string>("answer"); // possibly change string to custom type
  return (
    <div>
      {screen === "start" && (
        <div className="main-screen">
          <h1 className="app-title">CAPITALS FLASHCARDS</h1>
          <button className="start-btn">START</button>
        </div>
      )}
      {screen === "question" && (
        <Question setScreen={setScreen} country="wasifcountry" />
      )}
      {screen === "answer" && <RevealAnswer capital="wasifcapital" setScreen={setScreen}/>}
      {/* {countries_capitals.map((country)=><p key={country.country}>{country.country}</p>)} */}
    </div>
  );
}

export default App;
