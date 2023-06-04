import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HalamanLogin from "./page/HalamanLogin";
import HalamanSignup from "./page/HalamanSignup";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HalamanLogin />} />
      <Route path="/Signup" element={<HalamanSignup />} />
    </Routes>
  </Router>
  );
}

export default App;
