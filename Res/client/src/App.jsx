// /client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReservationPage from "./pages/ReservationPage";
import ConfirmPage from "./pages/ConfirmPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReservationPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
      </Routes>
    </Router>
  );
}

export default App;