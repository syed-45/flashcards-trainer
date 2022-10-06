interface QuestionProps {
  country: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}
export function Question(props: QuestionProps): JSX.Element {
  // = showCountry()
  return <div>{props.country + "!!!!!"}</div>;
}
