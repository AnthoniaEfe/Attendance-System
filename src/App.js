import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import AttendanceReport from "./pages/AttendanceReport";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      {/*  Routing of pages*/}
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/report" element={<AttendanceReport />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
