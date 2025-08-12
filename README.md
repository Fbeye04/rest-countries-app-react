# World Explorer - national data explorer application

An interactive web application that allows users to explore data on countries around the world, built using React and the REST Countries API. This project is an implementation of a challenge by Frontend Mentor.

**[Live Demo]()**

![Screenshot World Explorer]()

---

## Project Description

World Explorer is a Single-Page Application (SPA) that provides comprehensive information about countries around the world. Users can easily search, filter, and view details about each country. This project was developed to practice and demonstrate proficiency in utilizing the modern React ecosystem, including state management, client-side routing, and interaction with external APIs.

---

## Key Features

- **Responsive Display:** A design that adapts well to various screen sizes, from mobile, tablet, to desktop.
- **Dark/Light Mode:** A theme switcher feature for user visual comfort, with preferences saved in the browser.
- **Real-time Search:** Users can dynamically search for countries by name.
- **Region-Based Filter:** Allows users to filter countries by continent (Asia, Europe, Africa, etc.).
- **Detail Page:** Navigate to the detail page for each country without reloading the page, displaying more comprehensive information.
- **Interactive Border Countries:** Displays neighboring countries that can be clicked to navigate to the country's detail page.

---

## Technologies Used

- **React.js:** The main library for building user interfaces (UI).
- **Vite:** Next-generation frontend tooling for fast development processes.
- **React Router:** For handling navigation and routing on the client side (SPA).
- **Tailwind CSS:** A utility-first CSS framework for fast and responsive styling.
- **REST Countries API:** As an external data source for all country information.
- **Vercel:** For application deployment and hosting.

---

## Challenges & Lessons Learned

This is the most important part to demonstrate your thought process to recruiters.

The biggest challenge in this project was managing the state that needed to be shared between pages. Initially, I placed the state for filtering and searching in the `HomePage` component, but I realized that the state was lost when moving to the detail page and back again.

The solution was to apply the **“Lifting State Up”** pattern, where the `searchTerm` and `regionFilter` state were moved to the parent component `App.jsx`. This way, the state remains even when the `HomePage` component is not displayed. This process gave me a deep understanding of data flow and good state architecture in React applications.

Additionally, I learned how to handle interdependent data in `DetailPage` to display the names of neighboring countries, where I had to perform a second fetch based on data from the first fetch using `useEffect` with the appropriate dependencies.

---

## How to Run a Project Locally

```bash
# 1. Clone this repository
git clone [https://github.com/Fbeye04/rest-countries-app-react](https://github.com/Fbeye04/rest-countries-app-react)

# 2. Enter the project directory
cd YOUR_REPO_NAME

# 3. Install all required dependencies
npm install

# 4. Run the development server
npm run dev
```
