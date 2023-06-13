import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HalamanLogin from "./page/HalamanLogin";
import HalamanSignup from "./page/HalamanSignup";
import HalamanDasboard from "./page/HalamanDasboard";
import HalamanOrderlist from "./page/HalamanOrderlist";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HalamanLogin />} />
      <Route path="/Signup" element={<HalamanSignup />} />
      <Route path="/Dasboard" element={<HalamanDasboard />} />
      <Route path="/orderlist" element={<HalamanOrderlist />} />
    </Routes>
  </Router>

  );
}

export default App;
