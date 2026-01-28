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

                    <div class="row row-cols-1 row-cols-md-4 g-4">
                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-primary mb-2">
                              <i class="bi bi-people"></i>
                            </div>
                            <h2 class="card-title mb-3">1,234</h2>
                            <p class="card-text text-muted">Active Users</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-success mb-2">
                              <i class="bi bi-graph-up"></i>
                            </div>
                            <h2 class="card-title mb-3">56%</h2>
                            <p class="card-text text-muted">Growth Rate</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-warning mb-2">
                              <i class="bi bi-star"></i>
                            </div>
                            <h2 class="card-title mb-3">4.8</h2>
                            <p class="card-text text-muted">Average Rating</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-danger mb-2">
                              <i class="bi bi-clock-history"></i>
                            </div>
                            <h2 class="card-title mb-3">98.3%</h2>
                            <p class="card-text text-muted">Uptime</p>
                          </div>
                        </div>
                      </div>
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
