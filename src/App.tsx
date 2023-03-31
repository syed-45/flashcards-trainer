import "./App.css";
import { useEffect, useState } from "react";
import countries_capitals from "./data/countries&capitals.json";
import { CountryCapital } from "./utils/types";
import { Screen } from "./utils/types";
import { Question } from "./Components/Question";
import { RevealAnswer } from "./Components/RevealAnswer";
import { Start } from "./Components/Start";
import { Finish } from "./Components/Finish";
import { Continue } from "./Components/Continue";
import { getRandomNumber } from "./utils/getRandomNumber";

const classNames = ["colours1", "colours2", "colours3", "colours4"];
const savedData = localStorage.getItem("myData");
const savedDataJSON: CountryCapital[] = JSON.parse(savedData || "[]");
const isThereData: boolean = savedDataJSON.length === 0;

function App(): JSX.Element {
  const [screen, setScreen] = useState<Screen>(
    isThereData ? "continue" : "start"
  );
  const [tuplesArray, setTuplesArray] = useState<CountryCapital[]>(
    isThereData ? savedDataJSON : countries_capitals.slice(0, 3)
  );
  const [tuple, setTuple] = useState<CountryCapital>(tuplesArray[0]);
  const [revealedAnswers, setRevealedAnswers] = useState<CountryCapital[]>([]);
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    let randomIndex = getRandomNumber(tuplesArray.length - 1);
    setTuple(tuplesArray[randomIndex]);
    setClassName((prev) => {
      const filteredClassNames = classNames.filter(
        (className) => className !== prev
      );
      randomIndex = getRandomNumber(filteredClassNames.length - 1);
      return filteredClassNames[randomIndex];
    });
    if (tuplesArray.length < 3) {
      localStorage.setItem("myData", JSON.stringify(tuplesArray));
    }
  }, [tuplesArray]);

  const handleKnowClick = (): void => {
    if (tuplesArray.length > 1) {
      setRevealedAnswers([...revealedAnswers, tuple]);
      setTuplesArray(
        tuplesArray.filter((tupleToCompare) => tupleToCompare !== tuple)
        //comparing sme obj reference so filter fn should return true for specificied conditions
      );
      if (screen === "answer") {
        setScreen("question");
      }
    } else {
      setScreen("finish");
    }
  };

  const handleResetClick = (): void => {
    setScreen("question");
    setTuplesArray(countries_capitals.slice(0, 3));
    setRevealedAnswers([]);
    localStorage.removeItem("myData");
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
      {screen === "continue" && (
        <Continue setScreen={setScreen} handleResetClick={handleResetClick} />
      )}
    </div>
  );
}

export default App;
