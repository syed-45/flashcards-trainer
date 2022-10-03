import { Question } from "./Components/Question";
import { RevealAnswer } from "./Components/RevealAnswer";
import countries_capitals from "./data/countries&capitals.json"

function App(): JSX.Element {
  return (
    <div>
      <Question/>
      <RevealAnswer/>
      {/* {countries_capitals.map((country)=><p key={country.country}>{country.country}</p>)} */}
    </div>
  );
}

export default App;
