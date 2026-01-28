import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

function All_User_List() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // to get all user list on load 
  useEffect(() => {
    document.title = "User List ";
    async function loadData() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/view_all_users/"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Data:", data.succuss);
        setUsers(data.succuss);
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    loadData();
  }, []); // runs once when page loads

  async function deleteuser(id) {
    console.log("test aat ", id);

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    // If user clicks "Cancel"
    if (!result.isConfirmed) {
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/delete_user/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log("API Data:", data.succuss);
      // setUsers(data.succuss);
      // loadData()
      console.log("delet sucussfull")
      navigate("/");

    } catch (error) {
      console.error("API Error:", error);
    }
  }


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
              <h3>User List</h3>
            </div>

            <div className="page-content">
              <section className="row">
                <div className="col-12 col-lg-12">
                  <div className="card ">

                    <div className="card-body">
                      <div class="col-12 col-md-12">
                        <div class="card ">
                          <div class="card-header">
                            <h4 class="card-title">User List</h4>
                          </div>
                          <div class="card-content">
                            <div class="card-body d-flex justify-content-between">
                              <div>
                                <div class="dataTable-dropdown ">
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      <select class="dataTable-selector form-select">
                                        <option value="5">5</option>
                                        <option value="10" selected="">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                      </select>
                                    </div>

                                    <div className="d-flex align-items-center ms-2">
                                      <label >
                                        entries per page
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <Link to="/Add_User_Page" class="btn btn-primary">Add</Link>
                                {/* <button type="button" class="btn btn-primary m-1" onClick={() => navigate("/add-user")}>Add</button> */}
                                <button type="button" class="btn btn-primary m-1">Search</button>
                                <button type="button" class="btn btn-primary m-1">Clear</button>
                              </div>
                            </div>

                            {/* <!-- Table with no outer spacing --> */}
                            <div class="table-responsive">
                              <table class="table table-hover mb-0 table-lg">
                                <thead>
                                  <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Roles</th>
                                    <th></th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>

                                  {users.length === 0 ? (
                                    <tr>
                                      <td colSpan="3">Loading...</td>
                                    </tr>
                                  ) : (
                                    users.map((user, index) => (
                                      <tr key={index}>
                                        <td className="text-bold-500">{user.username}</td>
                                        <td className="text-bold-500">{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                          <button type="button"
                                            class="btn btn-primary"
                                            onClick={() => navigate(`/profile/${user.id}`)}
                                          >View</button>
                                        </td>

                                        <td>
                                          <button type="button"
                                            class="btn btn-primary "
                                            onClick={() => deleteuser(user.id)}
                                          >Delete</button>
                                        </td>
                                      </tr>
                                    ))
                                  )}
                                </tbody>
                              </table>
                            </div>
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

export default All_User_List;
