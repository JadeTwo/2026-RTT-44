import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

import Navbar from './components/Navbar';

export default function App() {

  let user = 'Bob';

  return (
    <div>
      <Navbar />
      {/* conditionally render one of the elements/components 
      based off the path in the URL */}
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}