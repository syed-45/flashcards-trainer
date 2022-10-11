// import countries_capitals from "./data/countries&capitals.json"
import { Question } from "./Components/Question";
import { RevealAnswer } from "./Components/RevealAnswer";
import { useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [screen, setScreen] = useState<string>("question");
  return (
    <div>
      {screen === "start" && (
        <div className="main-screen">
          <h1 className="app-title">CAPITALS FLASHCARDS</h1>
          <button className="start-btn">START</button>
        </div>
      )}
      {screen === "question" && <Question setScreen={setScreen} country="wasifcountry" />}
      {screen === "answer" && <RevealAnswer/>}
      {/* {countries_capitals.map((country)=><p key={country.country}>{country.country}</p>)} */}
    </div>
  );
}

export default App;
