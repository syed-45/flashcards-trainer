import { RevealAnswerProps } from "../utils/types";

export function RevealAnswer(props: RevealAnswerProps): JSX.Element {
  const handleNextClick = (): void => {
    props.setScreen("question");
    props.handleKnowClick()
  }
  return (
    <div className="main-screen">
      <h1 className="capital">{props.capital}</h1>
      <button onClick={handleNextClick}>NEXT</button>
    </div>
  );
}
