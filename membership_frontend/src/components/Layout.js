import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import "./Layout.css";

// PUBLIC_INTERFACE
/**
 * Role-aware layout for the app. 
 * Shows sidebar for admin, topnav for all, handles mobile toggle.
 */
const Layout = ({ children, theme, onToggleTheme, role = 'admin' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  // Mobile: sidebar is a drawer. On desktop, persistent sidebar.
  return (
    <div className={`app-layout ${sidebarOpen ? "" : "sidebar-collapsed"}`}>
      {role === "admin" && sidebarOpen && (
        <Sidebar role={role} onClose={window.innerWidth < 900 ? handleCloseSidebar : undefined} />
      )}
      <div className="main-area">
        <TopNav
          onOpenSidebar={window.innerWidth < 900 ? handleOpenSidebar : undefined}
          theme={theme}
          onToggleTheme={onToggleTheme}
        />
        <main className="content-area">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
