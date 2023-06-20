import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HalamanLogin from "./page/HalamanLogin";
import HalamanSignup from "./page/HalamanSignup";
import HalamanDasboard from "./page/HalamanDasboard";
import HalamanOrderlist from "./page/HalamanOrderlist";
import HalamanTransaction from "./page/HalamanTransaction";
import HalamanTransactionData from "./page/HalamanTransactionData";
import HalamanEdit from "./page/HalamanEdit";
import HalamanCosOrder from "./page/HalamanCosOrder";
import HalamanOrderlistCos from "./page/HalamanOrderlistCos";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HalamanLogin />} />
      <Route path="/Signup" element={<HalamanSignup />} />
      <Route path="/Dasboard" element={<HalamanDasboard />} />
      <Route path="/orderlist" element={<HalamanOrderlist />} />
      <Route path="/Transaction" element={<HalamanTransaction />}/>
      <Route path="/TransactionData" element={<HalamanTransactionData />}/>
      <Route path="/Edit" element={<HalamanEdit />} />
      <Route path="/Order" element={<HalamanCosOrder />} />
      <Route path="/OrderListCos" element={<HalamanOrderlistCos />} />


    </Routes>
  </Router>

  );
}

export default App;
