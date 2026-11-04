import EmployeePage from "./pages/EmployeePage";
import HomePage from "./pages/HomePage";

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div id="app">
     
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employee/:id" element={<EmployeePage />} />
    </Routes>

    </div>
  )
}