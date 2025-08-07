import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Controls from "./components/Controls.jsx";
import CountryCard from "./components/CountryCard.jsx";
import DetailPage from "./components/DetailPage.jsx";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = regionFilter ? country.region === regionFilter : true;
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <>
      <Header />
      <main>
        {!selectedCountry ? (
          <section className='py-8'>
            <div className='md:w-[95%] lg:w-[90%] md:mx-auto'>
              <Controls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                regionFilter={regionFilter}
                setRegionFilter={setRegionFilter}
              />
              <div className='py-0 px-14 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-0 lg:px-12 2xl:grid-cols-4 gap-8 z-10'>
                {filteredCountries.map((country) => (
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
            </div>
          </section>
        ) : (
          <section className='py-8'>
            <div className='md:w-[95%] lg:w-[90%] md:mx-auto'>
              <button onClick={() => setSelectedCountry(null)}>
                <i class='fa-solid fa-arrow-left'></i>Back
              </button>

              <DetailPage />
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
