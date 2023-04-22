import './css/App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './components/HomePage';
import Reservation from './components/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
