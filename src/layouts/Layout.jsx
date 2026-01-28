import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <>
       {/* Mazer CSS */}
      <link rel="stylesheet" href="/assets/compiled/css/app.css" />
      <link rel="stylesheet" href="/assets/compiled/css/app-dark.css" />

      <Sidebar />

      <main className="container-fluid py-4">
        {children}
      </main>

      {/* Mazer JS */}
      <script src="/assets/compiled/js/app.js"></script>

      <Footer />
    </>
  );
}

export default Layout;
