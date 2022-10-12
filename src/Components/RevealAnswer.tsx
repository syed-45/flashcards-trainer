interface RevealAnswerProps {  
  capital: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

export function RevealAnswer(props: RevealAnswerProps): JSX.Element {
  return (
  <div className="main-screen">
    <h1 className="capital">{props.capital}</h1>
    <button onClick={() => props.setScreen("question")}>NEXT</button>        
  </div>
  );
}
