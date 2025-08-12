import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Header isDarkMode={darkMode} onToggle={toggleDarkMode} />
      <main className='bg-bg-color dark:bg-dark-bg transition-colors duration-300 grow flex flex-col min-h-screen'>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                regionFilter={regionFilter}
                setRegionFilter={setRegionFilter}
              />
            }
          />
          <Route path='/country/:countryCode' element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
