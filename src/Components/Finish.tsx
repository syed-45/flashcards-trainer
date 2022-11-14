import { FinishProps } from "../utils/types";

export function Finish(props: FinishProps): JSX.Element {
  return (
    <div className="main-screen">
      <h1 className="finish">You have finished all the flashcards!</h1>
      <button onClick={props.handleResetClick} className="reset-btn">
        Start again
      </button>
    </div>
  );
}
