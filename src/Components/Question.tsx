import { QuestionProps } from "../utils/types";

export function Question(props: QuestionProps): JSX.Element {
  return (
    <div className="main-screen">
      <h1 className="country">{`What is the capital of ${props.country}?`}</h1>
      <div className="question-screen-btns">
        <button onClick={props.handleKnowClick}>I know!</button>
        <button onClick={() => props.setScreen("answer")}>I don't know</button>
      </div>
    </div>
  );
}
