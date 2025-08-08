export default function CountryCard({
  name,
  flags,
  population,
  region,
  capital,
}) {
  return (
    <>
      <a
        href='#'
        className='transition duration-200 ease-in-out hover:translate-y-[-5px] hover:shadow-lg'>
        <article className='flex flex-col h-full bg-element-color dark:bg-dark-element rounded-md shadow-md animate-fadeInUp'>
          <img
            src={flags}
            className='w-full object-cover rounded-t-md aspect-[16/10]'
            alt={name}
          />

          <div className='pt-4 pb-6 px-6 text-text-color dark:text-dark-text'>
            <h2 className='text-xl font-bold'>{name}</h2>

            <ul className='mt-2'>
              <li>
                <strong>Population:</strong>{" "}
                {population.toLocaleString("en-US")}
              </li>
              <li>
                <strong>Region:</strong> {region}
              </li>
              <li>
                <strong>Capital:</strong> {capital}
              </li>
            </ul>
          </div>
        </article>
      </a>
    </>
  );
}
