// X Create a ThemeContext that will provide the current theme ('light' or 'dark') and a function to toggle the theme.
// X Create a top-level App component that acts as the ThemeProvider and manages the theme state.
// X Create a Navbar component that consumes the theme context to adjust its styling.
// X Create a Content component that also consumes the theme context for its styling.
// X Include a button (perhaps in Navbar or App) to toggle the theme.

import { useState } from "react";
import { ThemeContext } from "./context/themeContext"
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default function App() {

  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // Step 2: Provide the context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      <Navbar />
      <Content />
    </ThemeContext.Provider>
  )
}