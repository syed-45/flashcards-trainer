import countries_capitals from "./data/countries&capitals.json";
import { CountryCapital } from "./utils/types";
import { Question } from "./Components/Question";
import { RevealAnswer } from "./Components/RevealAnswer";
import { Start } from "./Components/Start";
import { useEffect, useState } from "react";
import "./App.css";
import { Screen } from "./utils/types";
import { getRandomNumber } from "./utils/getRandomNumber";

function App(): JSX.Element {
  const [screen, setScreen] = useState<Screen>("start");
  const [tuplesArray, setTuplesArray] = useState<CountryCapital[]>(countries_capitals);  
  const [tuple, setTuple] = useState<CountryCapital>(tuplesArray[0]);
  const [revealedAnswers, setRevealedAnswers] = useState<CountryCapital[]>([]);  
    
  useEffect(() => {
    const randomIndex = getRandomNumber(tuplesArray.length - 1)
    setTuple(tuplesArray[randomIndex]);
  }, [tuplesArray])
  
  const handleKnowClick = (): void => {
    if (tuplesArray.length > 1) {
      setRevealedAnswers([...revealedAnswers, tuple]);
      setTuplesArray(
        tuplesArray.filter((tupleToCompare) => tupleToCompare !== tuple)        
        //comparing sme obj reference so filter fn should return true for specificied conditions
        );      
      } else {
        console.log('finished all the cards!!!')
      }
      // console.log(tuple, revealedAnswers);
  };

  return (
    <div>
      {screen === "start" && <Start setScreen={setScreen}/>}
      {screen === "question" && (
        <Question
          setScreen={setScreen}
          country={tuple.country}
          handleKnowClick={handleKnowClick}
        />
      )}
      {screen === "answer" && (
        <RevealAnswer 
          handleKnowClick={handleKnowClick}
          capital={tuple.capital}
          setScreen={setScreen}
        />
      )}
      {/* {countries_capitals.map((country)=><p key={country.country}>{country.country}</p>)} */}
    </div>
  );
}

export default App;
