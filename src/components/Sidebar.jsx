import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  useEffect(() => {
    const toggle = document.getElementById("toggle-dark");
    if (!toggle) return;

    const savedTheme = localStorage.getItem("theme") || "light";

    // Apply saved theme
    document.body.classList.toggle("theme-dark", savedTheme === "dark");
    document.documentElement.setAttribute(
      "data-bs-theme",
      savedTheme === "dark" ? "dark" : "light"
    );
    toggle.checked = savedTheme === "dark";

    const handleToggle = () => {
      const isDark = toggle.checked;
      document.body.classList.toggle("theme-dark", isDark);
      document.documentElement.setAttribute(
        "data-bs-theme",
        isDark ? "dark" : "light"
      );
      localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    toggle.addEventListener("change", handleToggle);
    return () => toggle.removeEventListener("change", handleToggle);
  }, []);




  // Handle open/close for mobile/tablet
  const handleSidebarToggle = (e) => {
    e.preventDefault();
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  };

  return (
    <>
      {/* Open button for mobile/tablet */}
      <a
        href="#"
        className="btn btn-primary d-xl-none m-2"
        onClick={handleSidebarToggle}
        style={{ position: "fixed", zIndex: 999 }}
      >
        <i className="bi bi-list"></i>
      </a>

      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">

          {/* Sidebar Header */}
          <div className="sidebar-header position-relative">
            <div className="d-flex justify-content-between align-items-center">
              {/* Logo */}
              <div className="logo">
                <a href="/">
                  <img src="/assets/static/images/logo/logo.svg" alt="Logo" />
                </a>
              </div>

              {/* Close button for mobile/tablet */}
              <div className="toggler d-xl-none d-block">
                <a href="#" onClick={handleSidebarToggle}>
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="theme-toggle d-flex gap-2 align-items-center mt-3">
              <h6>Dark Them</h6>
              <div className="form-check form-switch fs-6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="toggle-dark"
                  style={{ cursor: "pointer" }}
                />
              </div>
              
            </div>
          </div>

          {/* Sidebar Menu */}
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-title">Menu</li>

              <li className={`sidebar-item ${
                location.pathname === "/" ? "active" : ""
              }`}>
                <Link to="/" className="sidebar-link">
                  <i className="bi bi-grid-fill"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              
              <li className={`sidebar-item ${
                location.pathname === "/All_User_List" ? "active" : ""
              }`}>
                <Link to="/All_User_List" className="sidebar-link">
                  <i class="bi bi-people-fill"></i>
                  <span>Users</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <Link to="/Logintest" className="sidebar-link">
                  <i className="bi bi-stack"></i>
                  <span>Components</span>
                </Link>
              </li>
              
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;
