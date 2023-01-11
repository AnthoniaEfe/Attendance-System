import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import LoadingPage from "./pages/LoadingPage";
import Attendance from "./pages/Attendance";
import AttendanceReport from "./pages/AttendanceReport";

function App() {
  return (
    <div className="App">
      
      {/*  Routing of pages*/}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/loading" element={<LoadingPage />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/report" element={<AttendanceReport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
