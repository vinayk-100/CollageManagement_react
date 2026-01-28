import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {

  const socketRef = useRef(null);
  const navigate = useNavigate();

  const [userCount, setUserCount] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [placement_officerCount, setplacement_officerCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);



  useEffect(() => {
    document.title = "Dashboard";
  }, []);



  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch("http://localhost:8000/display_count", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });

        if (res.status === 401) {
          navigate("/login", { replace: true });
          return;
        }

        if (!res.ok) {
          navigate("/error", { replace: true });
          return;
        }

        const data = await res.json();

        setUserCount(data.total_users);
        setTeacherCount(data.total_teacher);
        setStudentCount(data.total_student);
        setStaffCount(data.total_staff);
        setplacement_officerCount(data.total_staff);
        setCompanyCount(data.total_company);

      } catch (err) {
        console.error(err);
        navigate("/error", { replace: true });
      }
    };

    fetchCounts();
  }, [navigate]);



  useEffect(() => {
    
    if (socketRef.current) return;

    socketRef.current = new WebSocket("ws://127.0.0.1:8000/ws/chat/");

    socketRef.current.onopen = () => {
      console.log("✅ WebSocket handshake successful");
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "USER_COUNT_UPDATE") {
        setUserCount(data.user_count);
        setTeacherCount(data.teacher_count);

        setStudentCount(data.student_count);
        setStaffCount(data.student_count);
        setplacement_officerCount(data.placement_count);
        setCompanyCount(data.company_count);
      }

      if (data.type === "ACTIVE_USER_UPDATE") {
        setActiveUsers(data.active_users);
      }
    };

    socketRef.current.onclose = () => {
      console.log("❌ WebSocket closed");
      socketRef.current = null;
    };

    return () => {
      socketRef.current?.close();
      socketRef.current = null;
    };
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
                            <h2 class="card-title mb-3">{userCount}</h2>
                            <p class="card-text text-muted">Total User</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-success mb-2">
                              <i class="bi bi-people"></i>
                            </div>
                            <h2 class="card-title mb-3">{activeUsers}</h2>
                            <p class="card-text text-muted">active user</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-secondary mb-2">
                              <i class="bi bi-book"></i>
                            </div>
                            <h2 class="card-title mb-3">{studentCount}</h2>
                            <p class="card-text text-muted">Total Students</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-secondary mb-2">
                              <i class="bi bi-person-workspace"></i>
                            </div>
                            <h2 class="card-title mb-3">{teacherCount}</h2>
                            <p class="card-text text-muted">Total Teachers</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-secondary mb-2">
                              <i class="bi bi-person-badge"></i>
                            </div>
                            <h2 class="card-title mb-3">{staffCount}</h2>
                            <p class="card-text text-muted">Total Staff (working)</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-secondary mb-2">
                              <i class="bi bi-briefcase"></i>
                            </div>
                            <h2 class="card-title mb-3">{placement_officerCount}</h2>
                            <p class="card-text text-muted">Total placement office (working)</p>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card h-100 text-center shadow">
                          <div class="card-body">
                            <div class="display-4 text-secondary mb-2">
                              <i class="bi bi-buildings"></i>
                            </div>
                            <h2 class="card-title mb-3">{companyCount}</h2>
                            <p class="card-text text-muted">Total Company (working)</p>
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

export default Dashboard;
