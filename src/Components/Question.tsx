import { QuestionProps } from "../utils/types";

export function Question(props: QuestionProps): JSX.Element {  
  return (
    <div className="main-screen">
      <h1 className="country">{`What is the capital of ${props.country}?`}</h1>
      <div className="question-screen-btns">
        <button onClick={props.handleKnowClick}>I Know!</button>
        <button onClick={() => props.setScreen('answer')}>
          I Don't Know
        </button>
      </div>
    </div>
  );
}
