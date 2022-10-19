import { RevealAnswerProps } from "../utils/types";

export function RevealAnswer(props: RevealAnswerProps): JSX.Element {
  const handleNextClick = (): void => {
    props.handleKnowClick();
    props.setScreen("question");
  };
  return (
    <div className="main-screen">
      <h1 className="answer">{`The capital is ${props.capital}`}</h1>
      <button className="next-btn" onClick={handleNextClick}>Next</button>
    </div>
  );
}
