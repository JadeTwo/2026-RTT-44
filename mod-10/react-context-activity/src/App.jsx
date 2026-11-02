// X Define ThemeContext (theme, toggleTheme) and UserContext (currentUser, login, logout).
// X Create a top-level provider component (e.g., AppProviders) that provides both contexts.
// X Create a Header component that consumes UserContext to display user info/login button.
// X Create a Sidebar component that consumes ThemeContext to style itself.
// X Create a MainContent component that consumes both ThemeContext (for styling) and UserContext (to display user-specific content).
// Demonstrate that updating the theme does not cause the Header (if it only uses UserContext) to re-render unnecessarily (this might involve using React.memo and console logging in component renders for verification).

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

export default function App() {

  // Step 2: Provide the context
  return (
    <>
      <Header />
      <Navbar />
      <Content />
      <MainContent />
      <Sidebar />
   </>
  )
}