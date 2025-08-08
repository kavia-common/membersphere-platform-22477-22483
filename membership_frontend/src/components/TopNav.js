import React from "react";
import "./TopNav.css";

// PUBLIC_INTERFACE
const TopNav = ({ children, onOpenSidebar, theme, onToggleTheme }) => {
  return (
    <header className="topnav">
      <button className="topnav-hamburger" onClick={onOpenSidebar} aria-label="Open sidebar menu">
        ☰
      </button>
      <span className="topnav-brand">MemberSphere</span>
      <nav className="topnav-actions">
        <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {/* Extend with language/user/notifications as needed */}
      </nav>
      {children}
    </header>
  );
};

export default TopNav;
