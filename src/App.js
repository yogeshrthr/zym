import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingLayout from "./components/MainLayout";
import DashboardLayout from "./components/DashboardLayout"; // ← this needs sidebar

import Dashboard from "./pages/ClientDashboard";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

import "./styles/main.css";
import "./styles/client.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing pages */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
        </Route>

        {/* Dashboard pages — uses DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;