import { QuestionProps } from "../utils/types";

export function Question(props: QuestionProps): JSX.Element {
  // = showCountry()
  return (
    <div className="main-screen">
      <h1 className="country">{props.country + "!!!!!"}</h1>
      <div className="question-screen-btns">
        <button onClick={props.handleKnowClick}>know</button>
        <button onClick={() => props.setScreen('answer')}>
          don't know
        </button>
      </div>
    </div>
  );
}
