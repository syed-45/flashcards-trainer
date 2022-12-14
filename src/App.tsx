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
const classNames = ["colours1", "colours2", "colours3", "colours4"];

function App(): JSX.Element {
  const [screen, setScreen] = useState<Screen>("start");
  const [tuplesArray, setTuplesArray] =
    useState<CountryCapital[]>(countries_capitals);
  const [tuple, setTuple] = useState<CountryCapital>(tuplesArray[0]);
  const [revealedAnswers, setRevealedAnswers] = useState<CountryCapital[]>([]);
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    let randomIndex = getRandomNumber(tuplesArray.length - 1);
    setTuple(tuplesArray[randomIndex]);
    setClassName((prev) => {
      const filteredClassNames = classNames.filter(
        (className: string) => className !== prev
      );
      randomIndex = getRandomNumber(filteredClassNames.length - 1);
      return filteredClassNames[randomIndex];
    });
  }, [tuplesArray]);

  const handleKnowClick = (): void => {
    if (tuplesArray.length > 1) {
      setRevealedAnswers([...revealedAnswers, tuple]);
      setTuplesArray(
        tuplesArray.filter((tupleToCompare) => tupleToCompare !== tuple)
        //comparing sme obj reference so filter fn should return true for specificied conditions
      );
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

  return (
    <div className={screen === "start" ? "start-colours" : className}>
      {screen === "start" && <Start setScreen={setScreen} />}
      {screen === "question" && (
        <Question
          key={tuple.country}
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
