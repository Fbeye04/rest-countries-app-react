export default function Header() {
  return (
    <header className='bg-element-color relative z-10 shadow-md p-4 flex justify-between items-center'>
      <div className='flex justify-between py-2 px-1 w-full md:w-[95%] lg:w-[90%] md:mx-auto'>
        <h1 className='text-2xl font-bold'>World Explorer</h1>

        <div className='flex items-center gap-2 cursor-pointer'>
          <i className='fa-regular fa-moon text-xl'></i>
          <p className='text-xl font-semibold'>Dark Mode</p>
        </div>
      </div>
    </header>
  );
}
