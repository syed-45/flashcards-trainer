// import countries_capitals from "./data/countries&capitals.json"
import { Question } from "./Components/Question";
import { RevealAnswer } from "./Components/RevealAnswer";
import { Start } from "./Components/Start";
import { useState } from "react";
import "./App.css";
//create a new type for screen
// export type Screen = "start" | "question" | "answer";

function App(): JSX.Element {
  const [screen, setScreen] = useState<string>("start"); // possibly change string to custom type
  return (
    <div>
      {screen === "start" && <Start setScreen={setScreen} />}
      {screen === "question" && (
        <Question setScreen={setScreen} country="wasifcountry" />
      )}
      {screen === "answer" && (
        <RevealAnswer capital="wasifcapital" setScreen={setScreen} />
      )}
      {/* {countries_capitals.map((country)=><p key={country.country}>{country.country}</p>)} */}
    </div>
  );
}

export default App;
