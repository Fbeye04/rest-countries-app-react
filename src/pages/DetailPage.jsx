import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailPage() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        if (!response.ok) {
          throw new Error("Country not found");
        }
        const data = await response.json();
        const mainCountryData = data[0];
        setCountry(mainCountryData);

        if (mainCountryData.borders && mainCountryData.borders.length > 0) {
          const borderCodes = mainCountryData.borders.join(",");
          const borderResponse = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
          );
          const borderData = await borderResponse.json();
          setBorderCountries(
            borderData.map((country) => ({
              name: country.name.common,
              code: country.cca3,
            }))
          );
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCountryData();
  }, [countryCode]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <section className='py-8 px-6 lg:py-12 lg:px-0 grow'>
      <div className='md:w-[95%] lg:w-[90%] md:mx-auto'>
        <Link
          to='/'
          className='border-none bg-element-color dark:bg-dark-element text-text-color dark:text-dark-text py-4 px-6 shadow-md cursor-pointer'>
          <i className='fa-solid fa-arrow-left mr-2'></i>
          Back
        </Link>

        <div className='flex flex-col lg:flex-row lg:justify-between lg:mt-16 lg:w-full'>
          <img
            src={country.flags.svg}
            className='w-full max-w-[500px] lg:max-w-[45%] object-cover my-8 mx-auto lg:m-0 lg:shrink-0'
            alt={`${country.name.common} flag`}
          />

          <div className='lg:flex lg:flex-col lg:justify-center lg:max-w-[50%] lg:grow'>
            <h2 className='font-bold text-text-color dark:text-dark-text text-2xl'>
              {country.name.common}
            </h2>

            <div className='mt-4 flex flex-col md:flex-row md:justify-between gap-6'>
              <ul className='flex flex-col gap-2 text-text-color dark:text-dark-text'>
                <li>
                  <strong>Native Name: </strong>
                  {country.name.official}
                </li>
                <li>
                  <strong>Population: </strong>
                  {country.population.toLocaleString("en-US")}
                </li>
                <li>
                  <strong>Region: </strong>
                  {country.region}
                </li>
                <li>
                  <strong>Sub Region: </strong>
                  {country.subregion}
                </li>
                <li>
                  <strong>Capital: </strong>
                  {country.capital?.join(", ") ?? "N/A"}
                </li>
              </ul>

              <ul className='flex flex-col gap-2 text-text-color dark:text-dark-text'>
                <li>
                  <strong>Top Level Domain: </strong>
                  {country.tld?.join(", ")}
                </li>
                <li>
                  <strong>Currencied: </strong>
                  {Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(", ")}
                </li>
                <li>
                  <strong>Languages: </strong>
                  {Object.values(country.languages).join(", ")}
                </li>
              </ul>
            </div>

            <div className='flex flex-col md:flex-row md:items-center mt-8'>
              <h3 className='text-text-color dark:text-dark-text font-bold'>
                Border Countries:{" "}
              </h3>

              <div className='flex flex-wrap lg:flex-nowrap gap-3 mt-4 md:mt-0'>
                {borderCountries.length > 0 ? (
                  borderCountries.map((border) => (
                    <Link
                      key={border.code}
                      to={`/country/${border.code}`}
                      className='bg-element-color dark:bg-dark-element text-text-color dark:text-dark-text rounded-md py-2 px-6 shadow-md cursor-pointer hover:bg-hover-color dark:hover:bg-dark-hover transition-colors duration-300 lg:ml-4'>
                      {border.name}
                    </Link>
                  ))
                ) : (
                  <span className='text-text-color dark:text-dark-text md:ml-4'>
                    No border countries
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
