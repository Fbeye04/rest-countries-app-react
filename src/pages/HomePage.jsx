import { useState, useEffect } from "react";
import Controls from "../components/Controls.jsx";
import CountryCard from "../components/CountryCard.jsx";

export default function HomePage({
  searchTerm,
  setSearchTerm,
  regionFilter,
  setRegionFilter,
}) {
  const [countries, setCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState(12);

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

  const handleLoadMore = () => {
    setVisibleCountries((prev) => prev + 12);
  };

  return (
    <section className='py-8'>
      <div className='md:w-[95%] lg:w-[90%] md:mx-auto'>
        <Controls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
        />
        <div className='py-0 px-14 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-0 lg:px-12 2xl:grid-cols-4 gap-8 z-10'>
          {filteredCountries.slice(0, visibleCountries).map((country) => (
            <CountryCard
              key={country.cca3}
              cca3={country.cca3}
              flags={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </div>
        <div className='w-full'>
          <button
            onClick={handleLoadMore}
            className='border-none bg-element-color dark:bg-dark-element py-4 px-6 shadow-md flex items-center cursor-pointer text-text-color dark:text-dark-text font-bold my-0 mx-auto mt-8 rounded-md'>
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
