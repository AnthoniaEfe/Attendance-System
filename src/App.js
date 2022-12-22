import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <div className="App">
      {/*  Routing of pages*/}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/loading" element={<LoadingPage />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
