import countries_capitals from "./data/countries&capitals.json";
import { CountryCapital } from "./utils/types";
import { Question } from "./Components/Question";
import { RevealAnswer } from "./Components/RevealAnswer";
import { Start } from "./Components/Start";
import { useEffect, useState } from "react";
import "./App.css";
import { Screen } from "./utils/types";
import { getRandomNumber } from "./utils/getRandomNumber";
import { Finish } from "./Components/Finish";
const coloursArr = ["#264653", "#E9C46A", "#F4A261", "#E76F51"];

function App(): JSX.Element {
  const [screen, setScreen] = useState<Screen>("start");
  const [tuplesArray, setTuplesArray] =
    useState<CountryCapital[]>(countries_capitals);
  const [tuple, setTuple] = useState<CountryCapital>(tuplesArray[0]);
  const [revealedAnswers, setRevealedAnswers] = useState<CountryCapital[]>([]);
  const [colour, setColour] = useState<string>("");

  useEffect(() => {
    const randomIndex = getRandomNumber(tuplesArray.length - 1);
    setTuple(tuplesArray[randomIndex]);
  }, [tuplesArray]);

  const handleKnowClick = (): void => {
    if (tuplesArray.length > 1) {
      setRevealedAnswers([...revealedAnswers, tuple]);
      setTuplesArray(
        tuplesArray.filter((tupleToCompare) => tupleToCompare !== tuple)
        //comparing sme obj reference so filter fn should return true for specificied conditions
        )      
    } else {
      setScreen("finish");
    }
    // console.log(tuple, revealedAnswers);
  };

  const handleResetClick = (): void => {
    setScreen("question");
    setTuplesArray(countries_capitals);
    setRevealedAnswers([]);
  };

  useEffect(() => {
    const randomIndex = getRandomNumber(coloursArr.length - 2);
    setColour(prev => coloursArr.filter((colour: string) => colour !== prev)[randomIndex]);
    }, [tuple]);

  return (
    <div style={{backgroundColor: screen === "start" ? '#2A9D8F': colour}}>
      {screen === "start" && <Start setScreen={setScreen} />}
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
      {screen === "finish" && (
        <Finish setScreen={setScreen} handleResetClick={handleResetClick} />
      )}
    </div>
  );
}

export default App;
