interface QuestionProps {
  country: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}
export function Question(props: QuestionProps): JSX.Element {
  // = showCountry()
  return (
    <div className="main-screen">
      <h1 className="country">{props.country + "!!!!!"}</h1>
      <div className="question-screen-btns">
        <button onClick={() => console.log("need another random country!")}>
          know
        </button>
        <button onClick={() => console.log("hadnle know click!")}>
          don't know
        </button>
      </div>
    </div>
  );
}
