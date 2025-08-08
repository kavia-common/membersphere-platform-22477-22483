import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

// PUBLIC_INTERFACE
const Sidebar = ({ role = "admin", onClose }) => {
  /**
   * Sidebar navigation links, shown/hidden by role.
   * Extendable: add/remove routes, conditionally rendered for multi-role.
   */
  let links = [];

  if (role === "admin") {
    links = [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/admin", label: "Admin Portal" },
      { to: "/events", label: "Events" },
      { to: "/member", label: "Members" },
    ];
  } else if (role === "member") {
    links = [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/events", label: "Events" },
      { to: "/member", label: "My Profile" },
    ];
  } else {
    links = [
      { to: "/login", label: "Login" }
    ];
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="brand-logo">MemberSphere</span>
        {onClose && <button className="sidebar-close" onClick={onClose}>&times;</button>}
      </div>
      <nav className="sidebar-nav">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
            end
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
