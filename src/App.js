import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HalamanLogin from "./page/HalamanLogin";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HalamanLogin />} />
    </Routes>
  </Router>
  );
}

export default App;
