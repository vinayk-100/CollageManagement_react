import { useEffect, useState } from "react";


function Add_User_Page() {

    let fetch_api_link = "http://127.0.0.1:8000/add_user"

    // const [role, setRole] = useState("");
    // const [response, setResponse] = useState(null);

    // error and sucuss message
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    // Define state for form data
    const [formData, setFormData] = useState({
        email: '',
        role: '',
        first_name: '',
        last_name: '',
        enrollment_number: '',
    });


    useEffect(() => {
        document.title = "Add User";
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
async function handleSubmit(e) {
  e.preventDefault();

  try {
    const res = await fetch(fetch_api_link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); // ✅ parse first

    if (!res.ok) {
      const emailError = data?.error?.email?.[0];
      throw new Error(emailError || "Something went wrong");
    }

    setSuccessMessage("User added successfully 🎉");
    setErrorMessage("");
    console.log(data);

  } catch (error) {
    console.error(error.message);
    setErrorMessage(error.message);
    setSuccessMessage("");
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
                            <h3>Add User</h3>
                        </div>

                        <div className="page-content">
                            <section className="row">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Basic Inputs</h4>
                                    </div>

                                    <div class="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="basicInput">First Name</label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="first_name"
                                                            placeholder="first name"
                                                            name="first_name"
                                                            value={formData.first_name}
                                                            onChange={handleInputChange} />
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="basicInput">Email</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            class="form-control"
                                                            id="email"
                                                            placeholder="Email"
                                                            value={formData.email}
                                                            onChange={handleInputChange} />
                                                    </div>

                                                    {formData.role === "student" && (<>
                                                        <div class="form-group">
                                                            <label for="basicInput">Enrolment number</label>
                                                            <input
                                                                type="text"
                                                                name="enrollment_number"
                                                                class="form-control"
                                                                id="enrollment_number"
                                                                placeholder="enrolment number"
                                                                value={formData.enrollment_number}
                                                                onChange={handleInputChange} />
                                                        </div>


                                                    </>

                                                    )}

                                                    {/* {["teacher", "staff", "placement_officer"].includes(role) && (
                                                    <>
                                                        <div className="form-group">
                                                            <label htmlFor="basicInput">Enrolment number</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="enrollment_number"
                                                                placeholder="Enrolment number"
                                                            />
                                                        </div>
                                                    </>
                                                )} */}



                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="basicInput">Last Name</label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="last_name"
                                                            placeholder="last name"
                                                            name="last_name"
                                                            value={formData.last_name}
                                                            onChange={handleInputChange} />
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="basicInput">Roles</label>
                                                        <fieldset class="form-group">
                                                            <select class="form-select"
                                                                id="basicSelect"
                                                                name="role"
                                                                // value={role}
                                                                // onChange={(e) => setRole(e.target.value)}
                                                                value={formData.role}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="admin">Admin</option>
                                                                <option value="staff">Staff</option>
                                                                <option value="teacher">Teacher</option>
                                                                <option value="student">Students</option>
                                                                <option value="placement_officer">Placement Officer</option>
                                                                <option value="company">Company</option>
                                                            </select>
                                                        </fieldset>
                                                    </div>
                                                        
                                                        


                                                </div>
                                            </div>

                                            <div>
                                                <button type="submit" class="btn btn-primary m-1">Sumbit</button>
                                                <button type="button" class="btn btn-secondary m-1">Reset</button>
                                            </div>

                                            {successMessage && (
                                            <p style={{ color: "green" }}>{successMessage}</p>
                                            )}

                                            {errorMessage && (
                                            <p style={{ color: "red" }}>{errorMessage}</p>
                                            )}
                                        </form>
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

export default Add_User_Page;
