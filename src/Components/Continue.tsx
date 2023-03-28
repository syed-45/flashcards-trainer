import { ContinueProps } from "../utils/types";

export function Continue(props: ContinueProps): JSX.Element {
  return (
    <div className="main-screen">
      <h1>Welcome back</h1>
      <div className="question-screen-btns">
        <button onClick={() => {props.setScreen('question')}}>Continue</button>
        <button onClick={() => {
            props.handleResetClick()
            props.setScreen("start")
            }}>Restart</button>
      </div>
    </div>
  );
}
