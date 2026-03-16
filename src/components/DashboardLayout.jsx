import { useState } from "react";
import Navbar from "../components/client/Navbar";
import Sidebar from "../sections/client/Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      
      {/* Navbar fixed on top */}
      <Navbar />

      {/* Below navbar: sidebar LEFT + content RIGHT */}
      <div className="d-flex flex-grow-1" style={{ paddingTop: "72px" }}>

        {/* LEFT sidebar */}
        <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />

        {/* RIGHT main content */}
        <main className="flex-grow-1 overflow-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;