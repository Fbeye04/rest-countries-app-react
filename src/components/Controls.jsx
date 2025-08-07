import { useState } from "react";

export default function Controls({
  searchTerm,
  setSearchTerm,
  regionFilter,
  setRegionFilter,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    setRegionFilter(value);
    setIsOpen(false);
  };

  return (
    <div className='flex flex-col items-start px-6'>
      <form className='bg-element-color flex items-center w-full shadow-md rounded-md py-4 px-6'>
        <i className='fa-solid fa-magnifying-glass text-text-color w-6 shrink-0'></i>
        <input
          type='search'
          name='search'
          id='search-input'
          className='ml-4 outline-none grow w-full box-border text-base text-text-color bg-transparent placeholder:text-text-color'
          placeholder='Search for a country'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className='relative cursor-pointer'>
        <div
          className='bg-element-color flex items-center gap-8 rounded-md shadow-md py-4 px-6 mt-10'
          onClick={() => setIsOpen(!isOpen)}>
          <span className='text-base'>
            {regionFilter || "Filter by Region"}
          </span>
          <i className='fa-solid fa-chevron-down'></i>
        </div>

        {isOpen && (
          <ul className='absolute bg-element-color z-30 flex flex-col gap-2 rounded-md shadow-md py-4 px-6 mt-2 w-full text-text-color'>
            <li onClick={() => handleOptionClick("")}>All Regions</li>
            <li onClick={() => handleOptionClick("Africa")}>Africa</li>
            <li onClick={() => handleOptionClick("Americas")}>Americas</li>
            <li onClick={() => handleOptionClick("Asia")}>Asia</li>
            <li onClick={() => handleOptionClick("Europe")}>Europe</li>
            <li onClick={() => handleOptionClick("Oceania")}>Oceania</li>
          </ul>
        )}
      </div>
    </div>
  );
}
