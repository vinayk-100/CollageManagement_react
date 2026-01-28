import { useEffect, useState } from "react";


function Home() {

  useEffect(() => {
      document.title = "Dashboard";
    }, []);

  return (
    <>
      {/* Mazer CSS */}
      <link rel="stylesheet" href="/assets/compiled/css/app.css" />
      <link rel="stylesheet" href="/assets/compiled/css/app-dark.css" />

      <div id="app">



        {/* MAIN CONTENT */}
        <div id="main" className="layout-navbar">



          <div id="main-content">
            <div className="page-heading">
              <h3>Mazer React Test Page</h3>
            </div>

            <div className="page-content">
              <section className="row">
                <div className="col-12 col-lg-12">
                  <div className="card ">
                    <div className="card-header">
                      <h4>Test Card</h4>
                    </div>
                    <div className="card-body">
                      <p>This is a test page to confirm the Mazer template works correctly inside React.</p>
                    </div>
                    
                  </div>
                </div>
              </section>
            </div>



          </div>
        </div>

      </div>

      {/* Mazer JS */}
      <script src="/assets/static/js/initTheme.js"></script>
      <script src="/assets/compiled/js/app.js"></script>
    </>
  );
}

export default Home;
