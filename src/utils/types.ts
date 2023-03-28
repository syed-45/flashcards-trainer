export type Screen = "start" | "question" | "answer" | "finish" | "continue";

export interface StartProps {
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}

export interface RevealAnswerProps {
  capital: string;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  handleKnowClick: () => void;
}

export interface FinishProps {
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  handleResetClick: () => void;
}

export interface ContinueProps {
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  handleResetClick: () => void;
}

export interface QuestionProps {
  country: string;
  handleKnowClick: () => void;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}

export interface CountryCapital {
  country: string;
  capital: string;
}
