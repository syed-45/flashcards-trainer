import { StartProps } from "../utils/types";

export function Start(props: StartProps): JSX.Element {
  return (
    <div className="main-screen">
      <h1 className="app-title">CAPITALS FLASHCARDS</h1>
      <button className="start-btn" onClick={() => props.setScreen("question")}>
        START
      </button>
    </div>
  );
}
