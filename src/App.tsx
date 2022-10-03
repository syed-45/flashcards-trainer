import countriesData from "./data/allCountriesData.json";

function App(): JSX.Element {
  return (
    <div>
      <span>[</span>
      {countriesData.map((countryData): JSX.Element => {
        return (
          <p
            key={countryData.name.common}
          >{`{ "country": "${countryData.name.common}", "capital": "${countryData.capital}" }, `}</p>
        );
      })}
      <span>]</span>
    </div>
  );
}

export default App;
