export default function CountryCard({
  name,
  flags,
  population,
  region,
  capital,
}) {
  return (
    <>
      <a href='#'>
        <article>
          <img src={flags} alt={name} />

          <div>
            <h2>{name}</h2>

            <ul>
              <li>Population: {population.toLocaleString("en-US")}</li>
              <li>Region: {region}</li>
              <li>Capital: {capital}</li>
            </ul>
          </div>
        </article>
      </a>
    </>
  );
}
