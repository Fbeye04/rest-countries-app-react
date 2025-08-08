export default function Header({ isDarkMode, onToggle }) {
  return (
    <header className='bg-element-color dark:bg-dark-element relative z-10 shadow-md p-4 flex justify-between items-center'>
      <div className='flex justify-between py-2 px-1 w-full md:w-[95%] lg:w-[90%] md:mx-auto'>
        <h1 className='text-2xl font-bold dark:text-dark-text'>
          World Explorer
        </h1>

        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={onToggle}>
          {isDarkMode ? (
            <>
              <i className='fa-regular fa-sun text-xl text-dark-text'></i>
              <p className='text-xl font-semibold text-dark-text'>Light Mode</p>
            </>
          ) : (
            <>
              <i className='fa-regular fa-moon text-xl text-text-color'></i>
              <p className='text-xl font-semibold text-text-color'>Dark Mode</p>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
