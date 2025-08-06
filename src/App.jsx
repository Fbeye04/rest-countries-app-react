import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import CountryCard from "./components/CountryCard.jsx";

function App() {
  const [text, setText] = useState("Hello");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <Header />
      <div className='card-list'>
        {countries.map((country) => (
          <CountryCard
            key={country.cca3}
            flags={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
      <button onClick={() => setText("World!")}>{text}</button>
    </div>
  );
}

export default App;
