// import { Question } from "./Components/Question";
// import { RevealAnswer } from "./Components/RevealAnswer";
// import countries_capitals from "./data/countries&capitals.json"
import "./App.css"

function App(): JSX.Element {
  return (
    <div className='start-screen'>
      <h1 className='app-title'>CAPITALS FLASHCARDS</h1>
      <button className="start-btn">START</button>
      {/* <Question/>
      <RevealAnswer/> */}
      {/* {countries_capitals.map((country)=><p key={country.country}>{country.country}</p>)} */}
    </div>
  );
}

export default App;
